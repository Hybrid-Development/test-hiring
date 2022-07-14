import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Post, PostBody, postsService } from '../../services/posts';
import { Button } from '../Button';
import { Input } from '../Input';

import * as S from './styles';

interface EditModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  post: Post;
  onConfirm: (id: number, body: PostBody) => void;
}

export function EditModal({
  isOpen, onRequestClose, post, onConfirm,
}: EditModalProps) {
  const [title, setTitle] = useState(() => (
    post ? post.title : ''
  ));
  const [body, setBody] = useState(() => (
    post ? post.body : ''
  ));

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <S.Overlay onMouseDown={onRequestClose}>
      <S.Wrapper onMouseDown={(e) => e.stopPropagation()}>
        <div className="inputWrapper">
          <label htmlFor="title-edit-post">Title</label>
          <Input
            id="title-edit-post"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="inputWrapper">
          <label htmlFor="body-edit-post">Body</label>
          <Input
            id="body-edit-post"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </div>

        <div className="action">
          <Button onClick={() => onConfirm(post.id, {
            body,
            title,
          })}
          >
            Confirm
          </Button>
        </div>
      </S.Wrapper>
    </S.Overlay>,
    document.getElementById('modals-portal') as HTMLElement,
  );
}
