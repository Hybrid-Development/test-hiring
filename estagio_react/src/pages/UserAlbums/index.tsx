import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AlbumCard } from '../../components/AlbumCard';
import { Header } from '../../components/Header';
import { albumsService } from '../../services/albums';

import * as S from './styles';

interface IAlbum {
  id: number;
  title: string;
  userId: number;
  thumbnailUrl: string;
  thumbnailTitle: string;
}

export function UserAlbums() {
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data: albumsData } = await albumsService.getUserAlbums(id!);

      await Promise.all(
        albumsData.map(async (album) => {
          const { data: photosData } = await albumsService.listAlbumPhotos(String(album.id));

          setAlbums((prevState) => [
            ...prevState,
            {
              id: album.id,
              title: album.title,
              userId: album.userId,
              thumbnailUrl: photosData[0].thumbnailUrl,
              thumbnailTitle: photosData[0].title,
            },
          ]);
        }),
      );
    })();
  }, []);

  return (
    <>
      <Header title="User Albums" />

      <S.Container>
        {albums.map((album) => (
          <Link to={`/album/${album.id}`}>
            <AlbumCard
              key={album.id}
              thumbnail={album.thumbnailUrl}
              thumbnailAlt={album.thumbnailTitle}
              title={album.title}
            />
          </Link>
        ))}

      </S.Container>
    </>
  );
}
