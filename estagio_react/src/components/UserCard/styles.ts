import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 1rem;

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  
  .content {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;

    h3 {
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.75rem;
      font-weight: 500;
    }
  }
`;

export const Albums = styled.div`
  height: 40px;
  width: 125px;
`;
