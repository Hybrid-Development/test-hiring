import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import { AppRoutes } from '../../routes';

import * as S from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <S.Container>
          <S.Wrapper>
            <AppRoutes />
          </S.Wrapper>
        </S.Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
