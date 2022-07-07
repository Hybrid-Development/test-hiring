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

    button {
      width: 20px;
      height: 20px;
    }

    button + button {
      margin-left: 0.5rem;
    }
  }

  .comments {
    display: flex;
    align-items: center;
    
    button {
      width: 20px;
      height: 20px;
    }

    p {
      margin-left: 8px;
      font-size: 0.875rem;
    }
  }
`;

export const Comments = styled.div`
  margin-top: 1rem;

  > h2 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const CommentWrapper = styled.div`
  & + & {
    margin-top: 1rem;
  }
  
  .author {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    button {
      width: 16px;
      height: 16px;
    }

    > h3 {
      margin-left: 0.5rem;
    }
  }

  h3 {
      font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
  }
`;
