import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 600px;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;

  .action {
    width: 100px;
    height: 50px;
    margin-left: auto;
    margin-top: 1rem;
  }
`;
