import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem 0;
`

export const Container = styled.form`
  max-width: 30rem;
  padding: 2.4rem;

  background-color: #242526;

  h2 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 2.4rem;
  }

  button {
    border: none;
    font-size: 1.1rem;
    padding: 0.8rem;
    background-color: #03b252;
    color: #fff;
    text-decoration: none;
    text-align: center;
    border-radius: 0.4rem;
    width: 100%;
    margin-top: 2.4rem;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & + & {
    margin-top: 1.6rem;
  }

  label {
    color: #fff;
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    background-color: #18191a;
    border: 0;
    padding: 0.8rem 1rem;
    border: 0.5rem;
    font-size: 1.2rem;
    color: #fff;
  }
`
