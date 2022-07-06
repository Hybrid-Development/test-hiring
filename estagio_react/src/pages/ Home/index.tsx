import { Link } from 'react-router-dom';
import { UserCard } from '../../components/UserCard';
import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <h1>Users List</h1>
        </S.Header>

        <S.UsersList>
          {[...new Array(5)].map(() => (
            <S.UserCardWrapper>
              <Link to="/user/">
                <UserCard />
              </Link>
            </S.UserCardWrapper>
          ))}
        </S.UsersList>
      </S.Wrapper>
    </S.Container>
  );
}
