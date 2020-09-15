import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FAFAFA;
    color: #262626;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: sans-serif;
  }

  button: {
    cursor: pointer;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyles;
