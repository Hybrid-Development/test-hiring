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
  const [activeSlideId, setActiveSlideId] = useState(0);

  const { id } = useParams();

  function handleSetActiveSlideId(slideId: number) {
    setActiveSlideId(slideId);
  }

  useEffect(() => {
    (async () => {
      const { data } = await albumsService.listAlbumPhotos(id!);
      setPhotos(data);
    })();
  }, []);

  console.log(activeSlideId);

  return (
    <>
      <Header title="Album photos" />

      <S.Container>
        {photos.map((photo, i) => (
          <S.PhotoButton onClick={() => {
            setIsLightBoxOpen(true);
            setActiveSlideId(i);
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
          photos={photos}
          setActiveSlideId={handleSetActiveSlideId}
          activeSlideId={activeSlideId}
        />
      )}
    </>
  );
}
