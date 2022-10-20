import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: ${theme.getSize(4)};
`;

export const Weekday = styled.div`
  display: block;
  width: 100%;
  padding: ${theme.getSize(4)};
  background-color: ${theme.colors.colorA['100']};
  margin: 0 ${theme.getSize(1)};
  border-radius: ${theme.border.radius['1']};
`;

export const WeekdayContainer = styled.div`
  display: flex;
`;

export const DaysContainer = styled.div``;
