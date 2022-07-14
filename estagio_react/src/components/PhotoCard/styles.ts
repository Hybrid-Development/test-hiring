import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 10px;
  height: 100%;

  img {
    border-radius: 8px;
    width: 100%;
    height: 225px;
  }

  .title {
    padding: 0.5rem;

    h3 {
      text-align: center;
    }
  }
`;
