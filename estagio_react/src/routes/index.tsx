import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/ Home';
import { AlbumPhotos } from '../pages/AlbumPhotos';
import { Posts } from '../pages/Posts';
import { UserAlbums } from '../pages/UserAlbums';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<UserAlbums />} />
      <Route path="/album/:id/" element={<AlbumPhotos />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}
