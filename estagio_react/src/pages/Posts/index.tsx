import { useEffect, useState } from 'react';
import { ConfirmModal } from '../../components/ConfirmModal';
import { EditModal } from '../../components/EditModal';
import { Header } from '../../components/Header';
import { PostCard } from '../../components/PostCard';
import {
  Comment, Post, PostBody, postsService,
} from '../../services/posts';
import { User, usersService } from '../../services/users';
import * as S from './styles';

interface IPost {
  post: Post;
  user: User;
  comments: Comment[];
}

export function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<IPost>();
  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    name: '',
  });

  useEffect(() => {
    (async () => {
      const { data: postsData } = await postsService.listPosts();

      await Promise.all(
        postsData.map(async (post) => {
          const { data: userData } = await usersService.getById(post.userId);
          const { data: commentsData } = await postsService.getComments(post.id);

          setPosts((prevState) => [
            ...prevState,
            {
              post,
              user: userData,
              comments: commentsData,
            },
          ]);
        }),
      );
    })();
  }, []);

  function handleCloseModal() {
    setIsModalOpen({
      isOpen: false,
      name: '',
    });
  }

  async function handleDeletePost(id: number) {
    await postsService.deletePost(id);
    setPosts((prevState) => prevState.filter((item) => item.post.id !== id));
    handleCloseModal();
  }

  async function handleUpdatePost(id: number, body: PostBody) {
    await postsService.updatePost(id, {
      body: body.body,
      title: body.title,
    });

    setPosts((prevState) => prevState.map((item) => {
      if (item.post.id === id) {
        return {
          user: item.user,
          comments: item.comments,
          post: {
            id: item.post.id,
            userId: item.post.userId,
            body: body.body,
            title: body.title,
          },
        };
      }

      return item;
    }));

    handleCloseModal();
  }

  return (
    <>
      <Header title="Users Posts" />

      <S.Container>
        {posts.map((item, i) => (
          <S.PostItem key={i}>
            <PostCard
              post={item.post}
              user={item.user}
              comments={item.comments}
              onDelete={() => {
                setIsModalOpen({
                  isOpen: true,
                  name: 'confirm-delete',
                });
                setSelectedPost(item);
              }}
              onEdit={() => {
                setIsModalOpen({
                  isOpen: true,
                  name: 'edit',
                });
                setSelectedPost(item);
              }}
            />
          </S.PostItem>
        ))}
      </S.Container>

      {isModalOpen.name === 'confirm-delete' && (
        <ConfirmModal
          isOpen={isModalOpen.isOpen}
          onRequestClose={handleCloseModal}
          onConfirm={() => handleDeletePost(selectedPost?.post.id!)}
        />
      )}

      {isModalOpen.name === 'edit' && (
        <EditModal
          isOpen={isModalOpen.isOpen}
          onRequestClose={handleCloseModal}
          post={selectedPost?.post!}
          onConfirm={handleUpdatePost}
        />
      )}
    </>
  );
}
