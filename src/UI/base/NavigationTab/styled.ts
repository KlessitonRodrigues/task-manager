import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: ${theme.getSize(2)} ${theme.getSize(6)};
  border-bottom: 2px solid ${theme.colors.fromTheme().colorA['100']};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.2s;
  position: relative;

  &:hover {
    color: ${theme.colors.fromTheme().colorA['700']};
  }

  &.active {
    color: ${theme.colors.fromTheme().colorA['900']};
  }

  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 0px;
    height: 3px;
    background-color: ${theme.colors.fromTheme().colorA['500']};
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
