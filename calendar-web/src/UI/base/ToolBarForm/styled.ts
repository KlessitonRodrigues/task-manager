import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { transform: translateY(-20rem); opacity: 0.5; }
  to { transform: translateY(0); opacity: 1; }
`;

const fadeBg = keyframes`
  from { background-color: #0000; }
  to { background-color: #0008; }
`;

export const Background = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    background-color: #0008;
    position: absolute;
    z-index: 2;
    display: flex;
    backdrop-filter: blur(4px);
    animation: ${fadeBg} 0.4s ease-out;
  `
);

export const Container = styled.div(
  props => css`
    width: 100%;
    height: fit-content;
    max-width: ${props.theme.size(220)};
    padding: ${props.theme.size(4)};
    margin-top: ${props.theme.size(10)};
    margin-left: ${props.theme.size(10)};
    background-color: ${props.theme.colors.current.bg1};
    border-radius: ${props.theme.border.radius.medium};
    box-shadow: ${props.theme.shadow.low};
    border: ${props.theme.border.type.medium};
    animation: ${fadeIn} 0.4s ease-out;
  `
);
