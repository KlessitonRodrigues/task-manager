import styled from 'styled-components';
import theme from '@styles/theme';

export const Container = styled.button<{ padding?: string }>`
  margin: 0;
  padding: ${p => p.padding || '0'};
  min-width: ${theme.getSize(30)};
  min-height: ${theme.getSize(10)};
  background-color: ${theme.colors.dynamic().colorA['700']};
  box-shadow: ${theme.shadow['1']};
  color: ${theme.colors.white};
  border-radius: ${theme.border.radius['1']};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSize.body};
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: ${theme.shadow['3']};
  }
`;
