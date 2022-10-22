import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: ${theme.getSize(2)} ${theme.getSize(6)};
  border-bottom: 2px solid ${theme.colors.dynamic().colorA['100']};
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: border 0.3s;
  position: relative;

  &:hover {
    color: ${theme.colors.dynamic().colorA['700']};
  }

  &.active {
    color: ${theme.colors.dynamic().colorA['900']};
  }

  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 0px;
    height: 4px;
    background-color: ${theme.colors.dynamic().colorA['500']};
    transition: width 0.3s;
    bottom: -4px;
  }

  &.active::after {
    width: 100%;
  }
`;

export const IconContainer = styled.div`
  width: ${theme.getSize(7)};
`;
