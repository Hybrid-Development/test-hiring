import defaultTheme from '../assets/styles/themes/default';

declare module 'styled-components' {
  type ThemeType = typeof defaultTheme
  export interface DefaultTheme extends ThemeType { }
}
