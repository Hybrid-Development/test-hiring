import { api } from '../api';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

class PostsService {
  async listPosts() {
    return api.get<Post[]>('/posts');
  }
}

const postsService = new PostsService();

export { postsService };
