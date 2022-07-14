import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;
  padding: 0.5rem;
  
  img {
    width: 150px;
    height: 150px;
    border-radius: 4px;
  }
  
  h3 {
    margin-left: 0.75rem;
  }
`;
