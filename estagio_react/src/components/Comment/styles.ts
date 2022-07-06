import styled from 'styled-components'

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;

  background-color: #18191a;
  border-radius: 0.6rem;

  strong {
    margin-bottom: 0.4rem;
    font-weight: 500;
    font-size: 1.3rem;
  }

  small {
    font-size: 0.8rem;
    font-weight: 300;
    color: #a0a0a9;
  }

  p {
    margin-top: 1rem;
  }

  & + & {
    margin-top: 0.8rem;
  }
`
