import ReactDOM from 'react-dom';
import { postsService } from '../../services/posts';
import { Button } from '../Button';

import * as S from './styles';

interface ConfirmModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
}

export function ConfirmModal({ isOpen, onRequestClose, onConfirm }: ConfirmModalProps) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <S.Overlay onMouseDown={onRequestClose}>
      <S.Wrapper onMouseDown={(e) => e.stopPropagation()}>
        <div className="warning">
          <h2>
            Are you sure you want do delete it?
          </h2>
          <p>This action cannot be undone</p>
        </div>

        <div className="action">
          <Button onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </S.Wrapper>
    </S.Overlay>,
    document.getElementById('modals-portal') as HTMLElement,
  );
}
