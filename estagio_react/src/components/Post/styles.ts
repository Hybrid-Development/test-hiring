import styled from 'styled-components'

export const Wrapper = styled.li`
  position: relative;

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

  p {
    line-height: 1.6rem;
  }
`

export const ButtonShowComments = styled.button`
  border: none;
  font-size: 1.1rem;
  padding: 0.8rem;
  background-color: #03b252;
  color: #fff;
  text-decoration: none;
  text-align: center;
  border-radius: 0.4rem;
`

export const Comments = styled.div`
  h4 {
    font-weight: 600;
    margin-bottom: 1.6rem;
    font-size: 1.4rem;
  }

  ul {
    list-style: none;
  }
`

export const IconButtonContainer = styled.div`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;
`

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.7rem;
  background-color: #18191a;
  border: 0;
  border-radius: 0.8rem;

  cursor: pointer;
`
