import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 1rem;

  font-weight: 600;
  border-radius: 8px;
`;
