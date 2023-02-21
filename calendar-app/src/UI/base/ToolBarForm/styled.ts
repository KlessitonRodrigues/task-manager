import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { max-width: 0; }
  to { max-width: 40rem; }
`;

const fadeBg = keyframes`
  from { background-color: #0000; }
  to { background-color: #0006; }
`;

export const Container = styled.div(
  props => css`
    width: ${props.theme.size(140)};
    padding: ${props.theme.size(4)};
    margin-right: ${props.theme.size(4)};
    animation: ${fadeIn} 0.5s ease-out;
    position: relative;
    background-color: ${props.theme.colors.current.bg3};

    ::before {
      content: '';
      width: 100vw;
      height: 100vh;
      background-color: #0006;
      position: absolute;
      z-index: 1;
      left: 100%;
      top: 0;
      animation: ${fadeBg} 0.5s;
    }
  `
);
