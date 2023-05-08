import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: ${props.theme.size(2)};
  `
);
