import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0 ${theme.getSize(2)};
  color: ${theme.colors.fromTheme().text3};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.getSize(2)};
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: ${theme.getSize(2)};
`;

export const CloseBtn = styled.div`
  cursor: pointer;

  &:hover {
    color: ${theme.colors.fromTheme().colorA.highlight};
    border-radius: 100px;
  }
`;
