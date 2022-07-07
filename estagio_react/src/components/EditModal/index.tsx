import ReactDOM from 'react-dom';
import { Button } from '../Button';

import * as S from './styles';

interface EditModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
}

export function EditModal({ isOpen, onConfirm, onRequestClose }: EditModalProps) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <S.Overlay onMouseDown={onRequestClose}>
      <S.Wrapper onMouseDown={(e) => e.stopPropagation()}>

        <div className="action">
          <Button onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </S.Wrapper>
    </S.Overlay>,
    document.getElementById('modals-portal') as HTMLElement,
  );
}
