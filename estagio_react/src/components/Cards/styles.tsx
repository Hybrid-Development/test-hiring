import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  background-color: #f1ff72d3;
  border-radius: 8px;
  border: solid 1px gray;
  justify-content: center;
  align-items: center;
  gap: 8px;
  /* flex: 1 1 30%; */
  /* background-color: azure; */

  @media (max-width: 992px) {
    width: 80%;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
  a:hover {
    svg {
      fill: orange;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  max-height: 280px;
  max-width: 280px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    padding-top: 1rem;
    border-radius: 8px;
    object-fit: cover;
  }
  :houver {
    fill: orange;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  gap: 24px;
  max-width: fit-content;

  flex: 1;
  padding: 0.25rem;

  a {
    cursor: pointer;
    font-weight: inherit;
    color: inherit;
    white-space: nowrap;
    text-decoration: none;
    :hover {
      color: blue;
    }
  }

  > div {
    &:first-child {
      /* flex: 1;
      margin-left: auto; */
    }

    &:last-child {
      align-self: flex-end;
    }
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }

  span {
    font-size: 1.4rem;
  }

  button {
    background: transparent;
    padding: 4px;
  }

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;
