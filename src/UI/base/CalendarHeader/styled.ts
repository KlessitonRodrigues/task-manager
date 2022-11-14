import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: ${theme.getSize(2)} 0;
`;

export const Weekday = styled.div`
  display: block;
  text-align: center;
  font-weight: bold;
  width: 100%;
  padding: ${theme.getSize(2)};
  color: ${theme.colors.fromTheme().colorA['700']};
  margin: 0 ${theme.getSize(1)};
  border-radius: ${theme.border.radius['1']};
`;

export const WeekdayContainer = styled.div`
  display: flex;
  padding: ${theme.getSize(2)} 0 ${theme.getSize(4)};
`;

export const HeaderContainer = styled.div`
  padding: ${theme.getSize(1)};
  display: flex;
  align-items: center;
  gap: ${theme.getSize(8)};
`;

export const DateContainer = styled.div`
  padding: ${theme.getSize(1)};
  display: flex;
  align-items: center;
  gap: ${theme.getSize(4)};
`;

export const DateButton = styled.div`
  display: flex;
  padding: ${theme.getSize(1)};
  font-size: ${theme.getSize(8)};
  background-color: ${theme.colors.fromTheme().colorA['700']};
  box-shadow: ${theme.shadow['1']};
  color: ${theme.colors.white};
  border-radius: ${theme.border.radius['2']};
  cursor: pointer;
`;

export const DateLabel = styled.h1`
  padding: ${theme.getSize(1)};
  min-width: ${theme.getSize(80)};
  color: ${theme.colors.fromTheme().colorA['700']};
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;

export const DateNumber = styled.h1`
  padding: ${theme.getSize(1)};
  color: ${theme.colors.fromTheme().colorA['700']};
  font-weight: bold;
`;
