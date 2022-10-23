import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.h1`
  margin: ${theme.getSize(2)} 0 ${theme.getSize(4)};
  color: ${theme.colors.dynamic().text3};
  display: flex;
  align-items: center;
  gap: ${theme.getSize(2)};
`;
