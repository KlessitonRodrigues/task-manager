import styled, { css } from 'styled-components';
import theme from 'src/styles/theme';

interface ContainerProps {
  padding?: string;
  variant?: 'outiline';
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
    background-color: ${theme.colors.gray + '22'};
  }

  ${p =>
    p.variant === 'outiline' &&
    css`
      border: ${theme.border.type['1']};
      background-color: ${theme.colors.fromTheme().colorA['500']};
      color: ${theme.colors.white};
      &:hover {
        background-color: ${theme.colors.fromTheme().colorA['900']};
      }
    `}
`;
