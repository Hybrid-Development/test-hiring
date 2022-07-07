import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

export const Wrapper = styled.div`
  max-width: 752px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 5rem;
  margin-top: 4rem;

  .links {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    .link {
      p {
        font-size: 1rem;
        font-weight: 600;  
        
        :hover {
          color: ${({ theme }) => theme.colors.pink.primary};
        }
      }
    }
  }

  .link + .link {
    margin-left: 2rem;
  }
`;
