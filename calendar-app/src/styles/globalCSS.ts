import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle(
  props => css`
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
      font-size: ${props.theme.fontSize.body};
    }
    html,
    body {
      font-family: 'Roboto', sans-serif;
      background-color: ${props.theme.colors.current.bg1};
      color: ${props.theme.colors.current.text1};
    }
    h1 {
      font-size: ${props.theme.fontSize.h1};
    }
    h2 {
      font-size: ${props.theme.fontSize.h2};
    }
    h3 {
      font-size: ${props.theme.fontSize.h3};
    }
    h4 {
      font-size: ${props.theme.fontSize.h4};
    }
    h5 {
      font-size: ${props.theme.fontSize.h5};
    }
    h6 {
      font-size: ${props.theme.fontSize.h6};
    }
    ul {
      list-style: none;
    }
    a {
      text-decoration: none;
    }
    button {
      cursor: pointer;
      background-color: transparent;
    }
    div::-webkit-scrollbar {
      width: ${props.theme.size(2)};
    }
    div::-webkit-scrollbar-track {
      background: #0000;
    }
    div::-webkit-scrollbar-thumb {
      background: ${props.theme.colors.gray};
      border-radius: 2px;
    }
    div::-webkit-scrollbar-thumb:hover {
      background: ${props.theme.colors.current.main};
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .fadeIn {
      animation-name: fadeIn;
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    .fadeOut {
      animation-name: fadeOut;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    .fadeInUp {
      animation-name: fadeInUp;
    }

    @keyframes fadeOutDown {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
    }

    .fadeOutDown {
      animation-name: fadeOutDown;
    }
  `
);
