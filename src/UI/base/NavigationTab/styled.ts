import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div<{ active?: boolean }>`
  padding: ${theme.getSize(2)} ${theme.getSize(6)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.2s;
  position: relative;
  font-family: monospace;

  &:hover {
    color: ${theme.colors.fromTheme().colorA['700']};
  }

  &.active {
    color: ${theme.colors.fromTheme().colorA['700']};
  }

  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 0px;
    height: 5px;
    background-color: ${theme.colors.fromTheme().colorA['600']};
    transition: width 0.3s;
    bottom: -2px;
  }

  &.active::after {
    width: 100%;
  }
`;

export const IconContainer = styled.div`
  width: ${theme.getSize(7)};
`;
