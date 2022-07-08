import styled from "styled-components";

export const AlbumContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 4fr;
  grid-template-areas:
    "user  title_album"
    "list_album  list_album";
  padding-bottom: 2rem;
  background-color: rgba(25, 36, 36, 0.5);
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    height: 100%;
  }
`;
export const Container = styled.div<{ gridArea: string }>`
  grid-area: ${(props) => props.gridArea};
  display: flex;
  height: 100%;
  width: 100%;

  > div {
    display: flex;
    height: 5rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    /* background-color: aqua; */
    margin: 0 auto;
  }

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /*Firefox*/
  /* align-items: center; */
  @media (max-width: 500px) {
    /* overflow-y: auto; */
    flex-direction: column;
    padding: 0.5rem;
    margin: 0;
  }
`;
export const AlbumsListContainer = styled.ul`
  position: relative;
  max-height: 100%;
  width: 96%;
  margin: 0 auto;
  display: flex;

  padding: 0.2rem;
  list-style: none;
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
  gap: 0.2rem;
  :last-child {
    margin-right: auto;
  }
  a {
    white-space: pre-line;
    font-size: 1rem;
  }

  img {
    margin-right: auto;
    border-radius: 8px;
  }
  @media (max-width: 500px) {
    max-width: 100%;
    border-radius: 4px;
    height: 10rem;
    display: block;
    :last-child {
      margin-right: 0;
    }
  }
`;

export const PostItem = styled(AlbumItem)`
  flex-direction: column;
  align-items: flex-start;
  span {
    display: flex;
    width: 100%;
    /* padding: 0.2rem; */
    justify-content: space-between;
    align-items: center;
    gap: 0.2rem;
    border-bottom: solid 1px gray;
  }
`;
