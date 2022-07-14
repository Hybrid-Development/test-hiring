import * as S from './styles';

interface AlbumCardProps {
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
}

export function AlbumCard({ title, thumbnail, thumbnailAlt }: AlbumCardProps) {
  return (
    <S.Container>
      <img src={thumbnail} alt={thumbnailAlt} />
      <h3>{title}</h3>
    </S.Container>
  );
}
