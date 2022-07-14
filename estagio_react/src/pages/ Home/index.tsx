import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
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
    <>
      <Header title="Users List" />

      <S.UsersList>
        {users.map((user) => (
          <S.UserCardWrapper key={user.id}>
            <UserCard user={user} />
          </S.UserCardWrapper>
        ))}
      </S.UsersList>
    </>
  );
}
