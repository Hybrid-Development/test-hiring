import styled from "styled-components";

export const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 5fr;
  grid-template-areas: "user ." " list_album list_album";
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: rgba(25, 36, 36, 0.5);
`;
export const AlbumsListContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-area: list_album;
  list-style: none;
`;
export const AlbumItem = styled.li`

`;
