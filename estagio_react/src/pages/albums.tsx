import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "../components/Cards";
import { iAlbums, iUsers } from "../interface";
import {
  AlbumContainer,
  AlbumItem,
  AlbumsListContainer,
} from "../styles/pages/albums";
import getData from "../utils/getData";

// import { Container } from './styles';

const Albums: React.FC = () => {
  let { id } = useParams();
  const [albums, setAlbums] = useState([] as iAlbums[]);
  const [user, setUser] = useState<iUsers>({} as iUsers);
  useEffect(() => {
    const getdata = async () => {
      setAlbums(await getData<iAlbums[]>(`/user/${id}/albums`));
      const user = await getData<iUsers[]>("/users", {
        params: {
          id,
        },
      });
      setUser(user[0]);
    };
    getdata();
    // console.log(user);
  }, []);
  // console.log(user);
  return (
    <AlbumContainer>
      <div style={{ gridArea: "user" }}>
        <Cards user={user} />
      </div>
      <AlbumsListContainer>
        {albums.map((album) => (
          <AlbumItem key={album.id}>
            <Link to={`/photos/${album.id}`}>{album.title}</Link>
          </AlbumItem>
        ))}
      </AlbumsListContainer>
    </AlbumContainer>
  );
};

export default Albums;