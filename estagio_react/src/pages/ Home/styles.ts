import styled from 'styled-components';

export const UsersList = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const UserCardWrapper = styled.div`
  & + & {
    margin-top: 0.75rem;
  }

  width: 100%;
`;
