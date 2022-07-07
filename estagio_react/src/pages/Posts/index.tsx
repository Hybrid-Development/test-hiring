import { useEffect, useState } from 'react';
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

  console.log(posts);

  return (
    <>
      <Header title="Users Posts" />

      <S.Container>
        {posts.map((item) => (
          <S.PostItem>
            <PostCard post={item.post} user={item.user} />
          </S.PostItem>
        ))}
      </S.Container>
    </>
  );
}
