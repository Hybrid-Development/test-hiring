import { api } from '../api';

export interface Post {
  email: string;
  name: string;
  id: number;
  phone: string;
  username: string;
}

class PostsService {
  async listPosts() {
    return api.get('/posts?limit=10');
  }
}

const postsService = new PostsService();

export { postsService };
