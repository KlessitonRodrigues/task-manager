import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: ${theme.getSize(2)} 0;
  margin: 0 ${theme.getSize(1)};
  border-radius: ${theme.border.radius['1']};
  overflow: hidden;
`;

export const Number = styled.div`
  padding: ${theme.getSize(2)};
  border-radius: ${theme.border.radius['1']};
  color: ${theme.colors.white};
  background-color: ${theme.colors.dynamic().colorA['700']};
  box-shadow: ${theme.shadow['2']};
  font-weight: bold;
  margin-bottom: ${theme.getSize(4)};
`;

export const Content = styled.div`
  background-color: ${theme.colors.gray + '0D'};
  border-radius: ${theme.border.radius['1']};
  padding: 0 ${theme.getSize(1)};
  height: 100%;
`;
