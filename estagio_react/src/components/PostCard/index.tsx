import { FiUser } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';
import { HiOutlinePencil } from 'react-icons/hi';
import { RiDeleteBin7Line } from 'react-icons/ri';

import { Post } from '../../services/posts';
import { User, usersService } from '../../services/users';
import * as S from './styles';

interface PostCardProps {
  post: Post;
  user: User;
  onEdit: () => void;
  onDelete: () => void;
  onShowComments: () => void;
}

export function PostCard({
  post, user, onDelete, onEdit, onShowComments,
}: PostCardProps) {
  return (
    <S.Container>
      <S.Content>
        <div className="author">
          <FiUser size={20} />
          <h2>{user.name}</h2>
        </div>

        <h3>{post.title}</h3>

        <p>{post.body}</p>
      </S.Content>

      <S.Actions>
        <div className="deleteAndEdit">
          <button type="button" onClick={onEdit}>
            <HiOutlinePencil size={20} />
          </button>

          <button type="button" onClick={onDelete}>
            <RiDeleteBin7Line size={20} />
          </button>
        </div>

        <div className="comments">
          <button type="button" onClick={onShowComments}>
            <BiCommentDetail size={20} />
          </button>
        </div>
      </S.Actions>
    </S.Container>
  );
}