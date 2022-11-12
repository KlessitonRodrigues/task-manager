import styled, { css } from 'styled-components';
import theme from 'src/styles/theme';

interface ContainerProp {
  padding?: string;
  variant?: 'outline';
}

export const Container = styled.button<ContainerProp>`
  display: inline-flex;
  justify-content: center;
  height: ${theme.getSize(10)};
  min-width: ${theme.getSize(28)};
  background-color: ${theme.colors.fromTheme().colorA['700']};
  box-shadow: ${theme.shadow['1']};
  color: ${theme.colors.white};
  border-radius: ${theme.border.radius['1']};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSize.body};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme.colors.fromTheme().colorA['900']};
  }

  ${p =>
    p.variant === 'outline' &&
    css`
      background-color: transparent;
      box-shadow: none;
      border: none;
      color: ${theme.colors.fromTheme().colorA['900']};
      border: 1px solid ${theme.colors.fromTheme().colorA['700']};

      &:hover {
        background-color: ${theme.colors.fromTheme().colorA['100']};
      }
    `}
`;
