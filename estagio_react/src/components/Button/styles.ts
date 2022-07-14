import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.pink.primary};

  border: 0;
  border-radius: 4px;

  font-weight: 600;
  font-size: 0.875rem;
`;
