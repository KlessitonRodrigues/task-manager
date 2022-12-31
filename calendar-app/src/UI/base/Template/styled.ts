import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    padding: ${props.theme.size(5)};
  `
);
