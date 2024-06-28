import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
`;
