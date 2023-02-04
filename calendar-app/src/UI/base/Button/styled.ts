import styled, { css } from 'styled-components';

type ContainerProps = { padding?: string; variant: ButtonProps['variant'] };

export const Container = styled.button<ContainerProps>(
  props => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: ${props.theme.size(10)};
    min-width: ${props.theme.size(28)};
    padding: 0 ${props.theme.size(4)};
    border-radius: ${props.theme.border.radius.medium};
    transition: background-color 0.2s;
    user-select: none;
    border: none;
    box-shadow: none;

    ${props.variant === 'solid' &&
    css`
      background-color: ${props.theme.colors.current.mainBg};
      color: ${props.theme.colors.white};

      &:hover {
        background-color: ${props.theme.colors.current.mainHover};
      }
    `}

    ${props.variant === 'outline' &&
    css`
      color: ${props.theme.colors.current.main};
      border: 1px solid ${props.theme.colors.current.main};
      background-color: transparent;
      box-shadow: none;

      &:hover {
        background-color: ${props.theme.colors.current.bg2};
      }
    `}
  `
);

export const Label = styled.span(
  props => css`
    padding: ${props.theme.size(0.5)} ${props.theme.size(3)} 0;
    font-size: ${props.theme.fontSize.label};
  `
);

export const Icon = styled.div(
  props => css`
    display: flex;
    font-size: ${props.theme.size(5)};
  `
);
