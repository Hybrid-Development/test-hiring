import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4rem 0;
`

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-width: 30rem;
  /* height: 10rem; */

  padding: 1.6rem;

  background-color: #242526;
  color: #fff;

  border-radius: 0.6rem;

  h2 {
    font-size: 1.8rem;
  }

  p {
    line-height: 1.6rem;
  }

  button {
    background-color: red;
    border: none;
    padding: 0.8rem 0;
    font-size: 1.1rem;
    color: #fff;
    border-radius: 0.6rem;
    cursor: pointer;
  }
`
