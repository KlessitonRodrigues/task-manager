import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { max-width: 0; color: transparent;}
  to { max-width: 20rem; color: transparent;}
`;

export const Container = styled.div(
  props => css`
    width: ${props.theme.size(100)};
    padding: ${props.theme.size(2)};
    animation: ${fadeIn} 1s ease-out;
  `
);
