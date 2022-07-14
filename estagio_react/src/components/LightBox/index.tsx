import ReactDOM from 'react-dom';
import { Photo } from '../../services/albums';

import * as S from './styles';

interface LightBoxProps {
  isOpen: boolean;
  onRequestClose: () => void;
  photo: Photo;
}

export function LightBox({
  isOpen, onRequestClose, photo,
}: LightBoxProps) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <S.Overlay onMouseDown={onRequestClose}>
      <S.Wrapper onMouseDown={(e) => e.stopPropagation()}>
        <img src={photo.url} alt={photo.title} />
      </S.Wrapper>
    </S.Overlay>,
    document.getElementById('modals-portal') as HTMLElement,
  );
}
