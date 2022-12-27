import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Tab = styled.div<{ active?: boolean }>`
  padding: ${theme.getSize(2)} ${theme.getSize(5)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: monospace;
  color: ${theme.colors.fromTheme().text1};
  border-radius: ${theme.getSize(3, 3)} 0 0;
  transition: color 0.2s, background-color 0.2s;
  user-select: none;

  :hover {
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

export const Border = styled.div<{ left?: boolean }>`
  background-color: ${theme.colors.fromTheme().colorA.normal};
  padding: 0 ${theme.getSize(1.5)};
  border-radius: 0 0 ${p => (p.left ? `${theme.getSize(3)} 0` : `0 ${theme.getSize(3)}`)};
  height: 100%;
`;

export const BorderBackground = styled.div<{ active?: boolean }>`
  background-color: ${theme.colors.fromTheme().bg1};
  opacity: 0;

  &.active {
    opacity: 1;
  }
`;
