import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

export const Wrapper = styled.div`
  max-width: 752px;
  width: 100%;
  margin: 0 auto;
  margin-top: 5rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const UsersList = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const UserCardWrapper = styled.div`
  & + & {
    margin-top: 0.75rem;
  }
`;
