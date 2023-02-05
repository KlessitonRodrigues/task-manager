import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    padding: ${props.theme.size(2)};
    background-color: ${props.theme.colors.current.main};
    color: ${props.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `
);
