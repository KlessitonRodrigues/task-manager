import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  margin: ${theme.getSize(2)} 0 ${theme.getSize(4)};
  color: ${theme.colors.dynamic().text3};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.getSize(2)};
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: ${theme.getSize(2)};
`;

export const CloseBtn = styled.div`
  cursor: pointer;

  &:hover {
    color: ${theme.colors.dynamic().colorA['500']};
    border-radius: 100px;
  }
`;
