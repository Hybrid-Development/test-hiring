import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 1rem;
  border-radius: 4px;
`;

export const Content = styled.div`
  p {
    margin-top: 0.75rem;
    font-size: 0.875rem;
  }

  h3 {
    font-size: 1rem;
  }

  .author {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    h2 {
      margin-left: 0.5rem;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  button {
    background: none;
    border: 0;
    appearance: none;
  }

  .deleteAndEdit {
    display: flex;
    align-items: center;

    button + button {
      margin-left: 0.5rem;
    }
  }
`;
