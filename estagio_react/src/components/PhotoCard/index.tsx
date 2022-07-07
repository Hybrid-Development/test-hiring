import { Photo } from '../../services/albums';
import * as S from './styles';

interface PhotoCardProps {
  photo: Photo;
}

export function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <S.Container>
      <img src={photo.url} alt={photo.title} />

      <div className="title">
        <h3>{photo.title}</h3>
      </div>
    </S.Container>
  );
}
