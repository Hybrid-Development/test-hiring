import { FiUser } from 'react-icons/fi';

import { useNavigate } from 'react-router-dom';
import { User } from '../../services/users';
import * as S from './styles';
import { Button } from '../Button';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Info>
        <FiUser size={48} />

        <div className="content">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </S.Info>

      <S.Albums>
        <Button onClick={() => navigate(`/user/${user.id}`)}>
          See Albums
        </Button>
      </S.Albums>
    </S.Container>
  );
}
