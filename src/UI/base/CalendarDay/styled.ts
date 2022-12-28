import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: ${theme.size(0, 1)};
  border-radius: ${theme.border.radius['1']};
  overflow: hidden;
  position: relative;
  transition: padding-top 0.3s;

  .calendar-day-button {
    opacity: 0;
    transition: opacity 0.3s;
  }

  :hover {
    .calendar-day-button {
      opacity: 1;
    }
  }
`;

export const Header = styled.div<{ outOfMonth?: boolean }>`
  padding: ${theme.size(2)};
  margin-bottom: ${theme.size(4)};
  border-radius: ${theme.border.radius['2']};
  color: ${theme.colors.white};
  background-color: ${theme.colors.current().mainBg};
  box-shadow: ${theme.shadow['0']};
  font-weight: bold;

  ${p => p.outOfMonth && `background-color: ${theme.colors.gray + '99'};`}
`;

export const Content = styled.div`
  background-color: ${theme.colors.current().bg2};
  border-radius: ${theme.border.radius['2']};
  height: 100%;
`;

export const AddButtonContainer = styled.div`
  position: absolute;
  bottom: ${theme.size(4)};
  right: ${theme.size(4)};
  font-size: ${theme.size(10)};
`;
