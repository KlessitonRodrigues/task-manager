import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div<{ active?: boolean }>`
  padding: ${theme.getSize(2)} ${theme.getSize(6)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: monospace;
  color: ${theme.colors.fromTheme().colorA.highlight};
  border-radius: 0.8rem 0.8rem 0 0;
  transition: color 0.2s, background-color 0.2s;
  user-select: none;

  &:hover {
    background-color: ${theme.colors.fromTheme().bg1}66;
  }

  &.active {
    background-color: ${theme.colors.fromTheme().bg1};
  }

  :not(.active) {
    color: ${theme.colors.white};
  }
`;

export const IconContainer = styled.div`
  width: ${theme.getSize(6)};
`;
