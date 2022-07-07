import { useEffect, useState } from 'react';
import { ConfirmModal } from '../../components/ConfirmModal';
import { Header } from '../../components/Header';
import { PostCard } from '../../components/PostCard';
import { Post, postsService } from '../../services/posts';
import { User, usersService } from '../../services/users';
import * as S from './styles';

interface IPost {
  post: Post;
  user: User;
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

          setPosts((prevState) => [
            ...prevState,
            {
              post,
              user: userData,
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
    handleCloseModal();
  }

  return (
    <>
      <Header title="Users Posts" />

      <S.Container>
        {posts.map((item) => (
          <S.PostItem key={item.post.id}>
            <PostCard
              post={item.post}
              user={item.user}
              onDelete={() => {
                setIsModalOpen({
                  isOpen: true,
                  name: 'confirm-delete',
                });
                setSelectedPost(item);
              }}
              onEdit={() => console.log('edit')}
              onShowComments={() => console.log('show comments')}
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
    </>
  );
}
