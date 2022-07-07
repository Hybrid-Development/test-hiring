import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;
`;

export const PostItem = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;
