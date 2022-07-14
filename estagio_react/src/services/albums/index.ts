import { api } from '../api';

export interface Album {
  id: number;
  title: string;
  userId: number;
}

export interface Photo {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

class AlbumsService {
  async getUserAlbums(userId: string) {
    return api.get<Album[]>(`/users/${userId}/albums`);
  }

  async listAlbumPhotos(albumId: string) {
    return api.get<Photo[]>(`/albums/${albumId}/photos`);
  }
}

const albumsService = new AlbumsService();

export { albumsService };
