import styled, { css } from 'styled-components';

type ContainerProps = { padding?: string; variant?: 'outline' };

export const Container = styled.button<ContainerProps>(
  props => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${props.theme.size(10)};
    min-width: ${props.theme.size(28)};
    padding: 0 ${props.theme.size(4)};
    background-color: ${props.theme.colors.current.mainBg};
    box-shadow: none;
    color: ${props.theme.colors.white};
    border-radius: ${props.theme.border.radius.small};
    border: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${props.theme.colors.current.mainHover};
    }

    ${props.variant === 'outline' &&
    css`
      background-color: transparent;
      box-shadow: none;
      border: none;
      color: ${props.theme.colors.current.main};
      border: 1px solid ${props.theme.colors.current.main};

      &:hover {
        background-color: transparent;
      }
    `}
  `
);

export const Label = styled.span(
  props => css`
    padding: ${props.theme.size(0.5)} ${props.theme.size(3)} 0;
    font-size: ${props.theme.fontSize.h5};
    text-transform: uppercase;
    font-family: monospace;
  `
);

export const Icon = styled.div(
  props => css`
    display: flex;
    font-size: ${props.theme.size(5)};
  `
);
