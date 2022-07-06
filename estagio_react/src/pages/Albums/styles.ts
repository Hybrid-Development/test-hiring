import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4rem 0;
`

export const Albums = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const Album = styled.button`
  padding: 1rem;
  background-color: lightblue;
  cursor: pointer;
`

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.4);

  display: grid;
  place-items: center;
`

export const AlbumPhotos = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 40rem;
  height: 40rem;
  padding: 2.4rem;

  background-color: #242526;
  overflow: auto;

  .close-icon {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    cursor: pointer;
  }
`
