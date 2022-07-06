import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 40rem;

  padding: 2.4rem 0;

  color: #fff;

  ul {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    list-style: none;

    li {
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`

export const Logo = styled(Link)`
  color: #03b252;
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
`
