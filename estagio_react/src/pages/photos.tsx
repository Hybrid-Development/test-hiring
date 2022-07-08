import React, { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import Cards from "../components/Cards";
import { iPhotos, iUsers } from "../interface";
import {
  AlbumContainer as PhotosContainer,
  AlbumItem as PhotoItem,
  AlbumsListContainer as PhotoItemContainer,
  Container,
} from "../styles/pages/albums";
import getData from "../utils/getData";

// import { Container } from './styles';

const Photos: React.FC = () => {
  let { albumId, userId } = useParams();
  const [photos, setPhotos] = useState([] as iPhotos[]);
  const [user, setUser] = useState<iUsers>({} as iUsers);
  useEffect(() => {
    const getdata = async () => {
      setPhotos(
        await getData<iPhotos[]>(`/users/${userId}/photos`, {
          params: {
            albumId,
            limit: 10,
          },
        })
      );
      const user = await getData<iUsers[]>("/users", {
        params: {
          id: userId,
        },
      });
      setUser(user[0]);
    };
    getdata();
    // console.log(user);
  }, []);
  // console.log(user);
  return (
    <PhotosContainer>
      <div style={{ gridArea: "user", paddingLeft: "2vw" }}>
        <Cards user={user} />
      </div>
      <Container gridArea="title_album">
        <div>
          <Link to="/">
            <HiHome size={40} />
          </Link>
          <h1>Lista de Photos</h1>
        </div>
      </Container>
      <Container gridArea="list_album">
        <PhotoItemContainer>
          {photos.map((photo) => (
            <PhotoItem key={photo.id}>
              <img src={photo.thumbnailUrl} alt="" />
              <Link to={`/photos/${photo.id}`}>{photo.title}</Link>
            </PhotoItem>
          ))}
        </PhotoItemContainer>
      </Container>
    </PhotosContainer>
  );
};

export default Photos;
