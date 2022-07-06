import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import defaultTheme from './assets/styles/themes/default';
import GlobalStyles from './assets/styles/global';
import { AppRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
