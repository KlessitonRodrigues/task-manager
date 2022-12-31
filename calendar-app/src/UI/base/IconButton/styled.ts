import styled, { css } from 'styled-components';

type ContainerProps = { p?: string; variant?: 'solid' | 'outiline' };

export const Container = styled.button<ContainerProps>(
  props => css`
    margin: 0;
    min-width: ${props.theme.size(10)};
    min-height: ${props.theme.size(10)};
    border-radius: 100%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props.theme.size(8)};
    color: ${props.theme.colors.white};

    svg {
      fill: ${props.theme.colors.white}CC;
    }

    &:hover svg {
      fill: ${props.theme.colors.white};
    }
  `
);
