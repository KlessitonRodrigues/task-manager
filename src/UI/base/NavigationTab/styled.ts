import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: ${theme.getSize(2)} ${theme.getSize(6)};
  margin: 0 ${theme.getSize(1)};
  border: 1px solid ${theme.colors.colorA['500']};
  color: ${theme.colors.colorA['500']};
  border-radius: ${theme.border.radius['2']};
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    border: 1px solid ${theme.colors.colorA['900']};
  }
  &.active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.colorA['700']};
  }
`;

export const IconContainer = styled.div`
  width: ${theme.getSize(7)};
`;
