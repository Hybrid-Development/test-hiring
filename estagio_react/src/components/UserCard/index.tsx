import { User } from '../../services/users';
import * as S from './styles';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <S.Container>
      <p>{user.name}</p>
    </S.Container>
  );
}
