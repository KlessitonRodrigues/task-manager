import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    font-family: monospace;
    padding: ${props.theme.size(2)} 0;
  `
);
