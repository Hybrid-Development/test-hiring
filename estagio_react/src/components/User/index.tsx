import { Link } from 'react-router-dom'
import * as S from './styles'

type UserProps = {
  id: number
  name: string
  email: string
  phone: string
  website: string
  company: string
}

function User({ id, name, email, phone, website, company }: UserProps) {
  return (
    <S.Wrapper>
      <h2>{name}</h2>

      <S.InfoContainer>
        <h4>Informações:</h4>
        <span>Email: {email}</span>
        <span>Telefone: {phone}</span>
        <span>Email: {website}</span>
        <span>Email: {company}</span>
      </S.InfoContainer>

      <Link to={`/albums/${id}`}>Ver albuns</Link>
    </S.Wrapper>
  )
}

export default User
