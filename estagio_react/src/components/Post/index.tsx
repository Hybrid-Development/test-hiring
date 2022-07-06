import Comment from 'components/Comment'
import { CommentsState } from 'pages/Posts'

import { FiEdit, FiTrash } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { api } from 'services/api'

import * as S from './styles'

type PostProps = {
  title: string
  body: string
  comments: CommentsState
  postId: number
  onShowComments: (id: number) => void
  onDeletePost: (id: number) => void
}

function Post({
  title,
  body,
  comments,
  postId,
  onShowComments,
  onDeletePost
}: PostProps) {
  const navigate = useNavigate()
  return (
    <S.Wrapper>
      <S.IconButtonContainer>
        <S.IconButton onClick={() => navigate(`/posts/edit/${postId}`)}>
          <FiEdit size={20} color="#fff" />
        </S.IconButton>
        <S.IconButton onClick={() => onDeletePost(postId)}>
          <FiTrash size={20} color="#fff" />
        </S.IconButton>
      </S.IconButtonContainer>
      <h2>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
      <p>{body}</p>
      <S.ButtonShowComments onClick={() => onShowComments(postId)}>
        Ver comentários
      </S.ButtonShowComments>
      {comments && comments.id === postId && (
        <S.Comments>
          <h4>Comentários</h4>
          <ul>
            {comments.data.map(comment => (
              <Comment
                key={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
              />
            ))}
          </ul>
        </S.Comments>
      )}
    </S.Wrapper>
  )
}

export default Post
