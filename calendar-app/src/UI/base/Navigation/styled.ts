import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    display: inline-flex;
    padding-top: ${props.theme.size(1)};
  `
);
