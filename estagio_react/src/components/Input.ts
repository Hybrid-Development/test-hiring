import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 0;
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;
`;
