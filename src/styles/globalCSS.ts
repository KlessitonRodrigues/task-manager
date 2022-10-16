import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-weight: normal;
  }
  html {
    font-size: 16px;
  }
  body {
    font-size: ${theme.fontSize.body};
  }
  html, body {
    font-family: 'Poppins', sans-serif;
    background-color: ${theme.colors.bg.light};
    color: ${theme.colors.text.dark};
  }
  h1 {
    font-size: ${theme.fontSize.h1};
  }
  h2 {
    font-size: ${theme.fontSize.h2};
  }
  h3 {
    font-size: ${theme.fontSize.h3};
  }
  h4 {
    font-size: ${theme.fontSize.h4};
  }
  h5 {
    font-size: ${theme.fontSize.h5};
  }
  h6 {
    font-size: ${theme.fontSize.h6};
  }
  ul {
    list-style: none;
  }
  a {
      text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  div::-webkit-scrollbar {
      width: ${theme.getSize(2)};
  }
  div::-webkit-scrollbar-track {
      background: #0000;
  }
  div::-webkit-scrollbar-thumb {
      background: ${theme.colors.gray};
      border-radius: 2px;
  }
  div::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.colorA['500']};
  };
`;
