import styled from 'styled-components';
import theme from '@styles/theme';

export const Container = styled.button<{ padding?: string }>`
  margin: 0;
  padding: ${p => p.padding || '0'};
  min-width: ${theme.getSize(30)};
  min-height: ${theme.getSize(10)};
  background-color: ${theme.colors.dynamic().colorA['700']};
  color: ${theme.colors.white};
  border-radius: ${theme.border.radius['1']};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
