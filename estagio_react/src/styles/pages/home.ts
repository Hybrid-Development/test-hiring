import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  background-color: rgba(25, 36, 36, 0.5);
  overflow-x: hidden;
  padding: 0.3rem;
  > h1 {
    align-self: center;
    margin: auto;
  }
`;
export const UserContainer = styled.div`
  display: flex;
  gap: 1rem;
  /* justify-content: space-around; */
  border-top: solid 1px gray;
  border-bottom: solid 1px gray;
  padding: 1rem;
  overflow-x: scroll;
  box-shadow: 0px 1px 10px white;
  /* background-color: white; */
  /* align-items: center; */
  /* ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge 
  scrollbar-width: none; Firefox */
  @media (max-width: 500px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;
