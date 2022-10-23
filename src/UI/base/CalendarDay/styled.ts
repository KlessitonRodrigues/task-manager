import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: ${theme.getSize(2)} 0;
  margin: 0 ${theme.getSize(1)};
`;

export const Number = styled.div`
  padding: ${theme.getSize(2)} ${theme.getSize(2)};
  border-radius: ${theme.border.radius['1']};
  color: ${theme.colors.white};
  background-color: ${theme.colors.dynamic().colorA['700'] + '99'};
  box-shadow: ${theme.shadow['2']};
  font-weight: bold;
  margin-bottom: ${theme.getSize(4)};
`;
