import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCard } from '../../components/UserCard';
import { User, usersService } from '../../services/users';
import * as S from './styles';

export function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await usersService.listUsers();

        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <h1>Users List</h1>
        </S.Header>

        <S.UsersList>
          {users.map((user) => (
            <S.UserCardWrapper key={user.id}>
              <Link to={`/user/${user.id}`}>
                <UserCard user={user} />
              </Link>
            </S.UserCardWrapper>
          ))}
        </S.UsersList>
      </S.Wrapper>
    </S.Container>
  );
}
