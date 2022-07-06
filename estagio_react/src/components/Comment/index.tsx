import * as S from './styles'

type CommentProps = {
  name: string
  email: string
  body: string
}

function Comment({ name, email, body }: CommentProps) {
  return (
    <S.Wrapper>
      <strong>{name.charAt(0).toUpperCase() + name.slice(1)}</strong>
      <small>{email}</small>

      <p>{body}</p>
    </S.Wrapper>
  )
}

export default Comment
