import theme from 'src/styles/theme';
import styled, { css } from 'styled-components';

export const Container = styled.button<{
  padding?: string;
  variant?: 'outline';
}>`
  display: inline-flex;
  justify-content: center;
  height: ${theme.getSize(10)};
  min-width: ${theme.getSize(28)};
  padding: 0 ${theme.getSize(4)};
  background-color: ${theme.colors.fromTheme().colorA.normal};
  box-shadow: ${theme.shadow['0']};
  color: ${theme.colors.white};
  border-radius: ${theme.border.radius['2']};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSize.h5};
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
`;

export const Label = styled.span`
  padding: 0 ${theme.getSize(4)};
`;

export const Icon = styled.div`
  display: flex;
  font-size: ${theme.fontSize.h4};
`;
