import theme from 'src/styles/theme';
import styled, { css } from 'styled-components';

export const Container = styled.button<{
  padding?: string;
  variant?: 'outline';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${theme.size(10)};
  min-width: ${theme.size(28)};
  padding: 0 ${theme.size(4)};
  background-color: ${theme.colors.current().mainBg};
  box-shadow: ${theme.shadow['0']};
  color: ${theme.colors.white};
  border-radius: ${theme.border.radius.small};
  border: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme.colors.current().mainHover};
  }

  ${p =>
    p.variant === 'outline' &&
    css`
      background-color: transparent;
      box-shadow: none;
      border: none;
      color: ${theme.colors.current().main};
      border: 1px solid ${theme.colors.current().main};

      &:hover {
        background-color: transparent;
      }
    `}
`;

export const Label = styled.span`
  padding: ${theme.size(0.5)} ${theme.size(3)} 0;
  font-size: ${theme.fontSize.h5};
  text-transform: uppercase;
  font-family: monospace;
`;

export const Icon = styled.div`
  display: flex;
  font-size: ${theme.size(5)};
`;
