import styled from "styled-components";

export const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 5fr;
  grid-template-areas: "user  title_album" " list_album list_album";
  max-height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: rgba(25, 36, 36, 0.5);
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }
  padding-bottom: 2rem;
`;
export const AlbumsListContainer = styled.ul`
  height: 100%;
  width: 96%;
  margin: 0 auto;
  display: flex;
  overflow-y: hidden;
  /* align-items: center; */
  padding: 0.2rem;
  list-style: none;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (max-width: 500px) {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    flex-wrap: nowrap;
    gap: 0.5rem;
  }
`;
export const AlbumItem = styled.li`
  display: flex;
  flex: 1 1 23%;
  justify-content: center;
  align-items: center;
  /* max-height: 5rem; */
  overflow-wrap: break-word;
  max-width: 25%;
  background-color: white;
  border-radius: 8px;
  margin: 0;
  a {
    white-space: pre-line;
    font-size: 1rem;
  }
  :last-child {
    margin-right: auto;
  }
  @media (max-width: 500px) {
    max-width: 100%;
    border-radius: 4px;
    height: 10rem;
    display: block;
  }
`;
