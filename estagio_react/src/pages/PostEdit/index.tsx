import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from 'services/api'
import { IPost } from 'types/posts'
import * as S from './styles'

type PostEditProps = {
  posts: IPost[]
  setPosts: (posts: IPost[]) => void
}

function PostEdit({ setPosts, posts }: PostEditProps) {
  const navigate = useNavigate()
  const { id } = useParams()
  const [post, setPost] = useState<IPost>({
    title: '',
    body: ''
  } as IPost)

  useEffect(() => {
    api.get(`/posts/${id}`).then(response => {
      setPost(response.data)
    })
  }, [id])

  function handleChange(event: any) {
    setPost({ ...post, [event.target.name]: event.target.value })
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    api.patch(`/posts/${id}`, post).then(response => {
      setPosts(
        posts.map(item =>
          item.id === Number(id) ? { ...response.data } : item
        )
      )
      navigate('/posts')
    })
  }

  return (
    <S.Wrapper>
      <S.Container onSubmit={handleSubmit}>
        <h2>Editar post {id}</h2>

        <S.InputGroup>
          <label htmlFor="">Título</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={post.title}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="">Corpo</label>
          <input
            type="text"
            name="body"
            onChange={handleChange}
            value={post.body}
          />
        </S.InputGroup>

        <button>Salvar alterações</button>
      </S.Container>
    </S.Wrapper>
  )
}

export default PostEdit
