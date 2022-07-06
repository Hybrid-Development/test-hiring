import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/ Home';
import { UserAlbums } from '../pages/UserAlbums';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<UserAlbums />} />
    </Routes>
  );
}
