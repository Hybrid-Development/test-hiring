import { api } from '../api';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface PostBody {
  body: string;
  title: string;
}

class PostsService {
  async listPosts() {
    return api.get<Post[]>('/posts');
  }

  async deletePost(id: number) {
    return api.delete(`/posts/${id}`);
  }

  async updatePost(id: number, data: PostBody) {
    return api.put(`/posts/${id}`, { data });
  }
}

const postsService = new PostsService();

export { postsService };
