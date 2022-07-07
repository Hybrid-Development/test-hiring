import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { postsService } from '../../services/posts';
import * as S from './styles';

export function Posts() {
  useEffect(() => {
    (async () => {
      const response = await postsService.listPosts();

      console.log(response);
    })();
  }, []);

  return (
    <>
      <Header title="Users Posts" />

      <S.Container>
        <h1>posts</h1>
      </S.Container>
    </>
  );
}
