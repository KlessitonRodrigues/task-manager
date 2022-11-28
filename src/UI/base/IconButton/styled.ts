import styled, { css } from 'styled-components';
import theme from 'src/styles/theme';

interface ContainerProps {
  padding?: string;
  variant?: 'solid' | 'outiline';
}

export const Container = styled.button<ContainerProps>`
  margin: 0;
  min-width: ${theme.getSize(10)};
  min-height: ${theme.getSize(10)};
  border-radius: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.getSize(8)};
  background-color: transparent;
  transition: background-color 0.4s;
  color: ${theme.colors.black};
  &:hover {
    color: ${theme.colors.fromTheme().colorA.normal};
  }

  ${p =>
    p.variant === 'solid' &&
    css`
      border: ${theme.border.type['1']};
      background-color: ${theme.colors.fromTheme().colorA.normal};
      color: ${theme.colors.white};
      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.fromTheme().colorA.variant};
      }
    `}
`;
