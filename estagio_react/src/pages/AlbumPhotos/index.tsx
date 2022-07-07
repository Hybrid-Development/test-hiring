import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { LightBox } from '../../components/LightBox';
import { PhotoCard } from '../../components/PhotoCard';
import { albumsService, Photo } from '../../services/albums';

import * as S from './styles';

export function AlbumPhotos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<Photo>();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await albumsService.listAlbumPhotos(id!);
      setPhotos(data);
    })();
  }, []);

  return (
    <>
      <Header title="Album photos" />

      <S.Container>
        {photos.map((photo) => (
          <S.PhotoButton onClick={() => {
            setIsLightBoxOpen(true);
            setActivePhoto(photo);
          }}
          >
            <PhotoCard photo={photo} />
          </S.PhotoButton>
        ))}
      </S.Container>

      {isLightBoxOpen && (
        <LightBox
          isOpen={isLightBoxOpen}
          onRequestClose={() => setIsLightBoxOpen(false)}
          photo={activePhoto!}
        />
      )}
    </>
  );
}
