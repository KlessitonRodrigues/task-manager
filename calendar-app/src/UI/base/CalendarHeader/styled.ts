import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: ${theme.size(0)} 0;
`;

export const Weekday = styled.div`
  display: block;
  text-align: center;
  font-weight: bold;
  width: 100%;
  padding: ${theme.size(2)};
  color: ${theme.colors.current().main};
  border-radius: ${theme.border.radius['2']};
  background-color: ${theme.colors.current().bg2};
`;

export const WeekdayContainer = styled.div`
  display: flex;
  gap: ${theme.size(2)};
  padding: ${theme.size(1)};
  margin: ${theme.size(1)} 0 ${theme.size(6)};
`;

export const HeaderContainer = styled.div`
  padding: ${theme.size(2, 1)};
  display: flex;
  align-items: center;
  gap: ${theme.size(8)};
`;

export const DateContainer = styled.div`
  padding: ${theme.size(1)} 0;
  display: flex;
  align-items: center;
  gap: ${theme.size(4)};
`;

export const DateButton = styled.div`
  display: flex;
  padding: ${theme.size(0.75)};
  font-size: ${theme.size(8)};
  background-color: ${theme.colors.current().mainBg};
  box-shadow: ${theme.shadow['0']};
  color: ${theme.colors.white};
  border-radius: ${theme.border.radius['2']};
  cursor: pointer;
`;

export const DateLabel = styled.h1`
  padding: ${theme.size(1)};
  min-width: ${theme.size(80)};
  color: ${theme.colors.current().main};
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;

export const DateNumber = styled.h1`
  padding: ${theme.size(1)};
  color: ${theme.colors.current().main};
  font-weight: bold;
`;