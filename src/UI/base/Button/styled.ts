import styled, { css } from 'styled-components';
import theme from 'src/styles/theme';

interface ContainerProp {
  padding?: string;
  variant?: 'outline' | 'iconButton';
}

export const Container = styled.button<ContainerProp>`
  display: inline-flex;
  justify-content: center;
  height: ${theme.getSize(10)};
  min-width: ${theme.getSize(30)};
  padding: ${theme.getSize(0, 2)};
  background-color: ${theme.colors.fromTheme().colorA.normal};
  box-shadow: ${theme.shadow['0']};
  color: ${theme.colors.white};
  border-radius: ${theme.border.radius['2']};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSize.h4};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme.colors.fromTheme().colorA.variant};
  }

  ${p =>
    p.variant === 'outline' &&
    css`
      background-color: transparent;
      box-shadow: none;
      border: none;
      color: ${theme.colors.fromTheme().colorA.highlight};
      border: 1px solid ${theme.colors.fromTheme().colorA.normal};

      &:hover {
        background-color: transparent;
      }
    `}

  ${p =>
    p.variant === 'iconButton' &&
    css`
      width: auto;
      min-width: auto;
      & span {
        width: 0px;
        opacity: 0;
        transition: width 0.4s, opacity 0.6s;
        overflow: hidden;
      }
      &:hover span {
        width: 40px;
        opacity: 1;
      }
    `}
`;

export const Label = styled.span``;
export const Icon = styled.div`
  display: flex;
  font-size: ${theme.fontSize.h4};
`;
