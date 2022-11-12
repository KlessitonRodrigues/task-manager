import styled from 'styled-components';
import theme from 'src/styles/theme';

export const Container = styled.button<{ padding?: string }>`
  margin: 0;
  min-width: ${theme.getSize(10)};
  min-height: ${theme.getSize(10)};
  //background-color: ${theme.colors.fromTheme().colorA['700']};
  //box-shadow: ${theme.shadow['1']};
  color: ${theme.colors.black + 'CC'};
  border-radius: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSize.h2};
  transition: background-color 0.2s;

  &:hover {
    //background-color: ${theme.colors.fromTheme().colorA['900']};
  }
`;
