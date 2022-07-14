import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;

  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 1.5rem;
`;

export const PhotoButton = styled.button`
  background: none;
  border: 0;

  display: block;
`;
