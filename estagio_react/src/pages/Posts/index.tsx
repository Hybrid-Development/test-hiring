import Post from 'components/Post'
import { useEffect, useState } from 'react'
import { api } from 'services/api'
import { IComment, IPost } from 'types/posts'

import * as S from './styles'

export type CommentsState = {
  id: number
  data: IComment[]
}

type PostsProps = {
  posts: IPost[]
  setPosts: (posts: IPost[]) => void
}

function Posts({ posts, setPosts }: PostsProps) {
  const [comments, setComments] = useState<CommentsState>({
    id: 0,
    data: []
  })

  useEffect(() => {
    api.get('/users/1/posts').then(response => {
      setPosts(response.data)
    })
  }, [setPosts])

  async function showComments(id: number) {
    if (id === comments.id) {
      setComments({
        id: 0,
        data: []
      })
      return
    }

    api.get(`/posts/${id}/comments`).then(response => {
      setComments({ id, data: response.data })
    })
  }

  function handleDeletePost(id: number) {
    api.delete(`/posts/${id}`)
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <S.Wrapper>
      <S.Posts>
        {posts.map(post => (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            postId={post.id}
            comments={comments}
            onShowComments={showComments}
            onDeletePost={handleDeletePost}
          />
        ))}
      </S.Posts>
    </S.Wrapper>
  )
}

export default Posts
