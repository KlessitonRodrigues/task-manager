import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: ${theme.getSize(2, 0.5)};
  margin: 0 ${theme.getSize(1)};
  border-radius: ${theme.border.radius['1']};
  overflow: hidden;
  position: relative;

  .calendar-day-button {
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    .calendar-day-button {
      opacity: 1;
    }
  }
`;

export const Header = styled.div<{ outOfMonth?: boolean }>`
  padding: ${theme.getSize(2)};
  margin-bottom: ${theme.getSize(4)};
  border-radius: ${theme.border.radius['2']};
  color: ${theme.colors.white};
  background-color: ${theme.colors.fromTheme().colorA.normal};
  box-shadow: ${theme.shadow['0']};
  font-weight: bold;

  ${p => p.outOfMonth && `background-color: ${theme.colors.gray + '99'};`}
`;

export const Content = styled.div`
  background-color: ${theme.colors.fromTheme().bg2};
  border-radius: ${theme.border.radius['2']};
  height: 100%;
`;

export const AddButtonContainer = styled.div`
  position: absolute;
  bottom: ${theme.getSize(4)};
  right: ${theme.getSize(4)};
  font-size: ${theme.getSize(10)};
`;
