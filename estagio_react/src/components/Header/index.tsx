import { Link } from 'react-router-dom'
import * as S from './styles'

function Header() {
  return (
    <S.Wrapper>
      <S.Logo to="/">HYBRID DEVELOPMENT</S.Logo>

      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/">Users</Link>
        </li>
      </ul>
    </S.Wrapper>
  )
}

export default Header
