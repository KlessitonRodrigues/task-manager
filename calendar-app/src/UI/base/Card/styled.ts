import styled, { css } from 'styled-components';

export const Container = styled.div<{ bg: string }>(
  props => css`
    background-color: ${props.bg || props.theme.colors.current.bg1};
    padding: ${props.theme.size(2)};
    margin: ${props.theme.size(2)};
    border-radius: ${props.theme.border.radius.small};
    border: 1px solid transparent;

    :hover {
      border: ${props.theme.border.type.small};
    }
  `
);
