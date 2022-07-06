import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-width: 30rem;

  padding: 2.4rem;

  background-color: #242526;
  color: #fff;
  border-radius: 0.6rem;

  h2 {
    font-size: 1.8rem;
  }

  span {
    line-height: 1.6rem;
  }

  a {
    padding: 0.8rem;
    background-color: #03b252;
    color: #fff;
    text-decoration: none;
    text-align: center;
    border-radius: 0.4rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-weight: 500;
    margin-bottom: 1.6rem;
  }

  span {
    & + & {
      margin-top: 0.8rem;
    }
  }
`
