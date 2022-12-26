import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  margin: 0;

  ::before {
    content: '';
    padding: ${theme.getSize(1)};
    border-left: 4px solid ${theme.colors.fromTheme().colorA.highlight}77;
    position: absolute;
    left: -${theme.getSize(3)};
    top: ${theme.getSize(2)};
    height: 80%;
  }

  :hover::before {
    border-left: 5px solid ${theme.colors.fromTheme().colorA.highlight};
  }
`;

export const DaysContainer = styled.div<{ show?: boolean }>`
  display: flex;
  overflow: hidden;

  .calendar-day-content {
    opacity: 0;
    height: 0;
    transition: height 0.4s, opacity 0.4s;
    ${p => p.show && 'height: 44vh; opacity: 1;'}
    ${p => p.show && 'height: 44vh; opacity: 1;'}
  }

  .calendar-day-button {
    ${p => !p.show && 'display: none;'}
  }
`;

export const TopLeft = styled.h5<{ show?: boolean }>`
  position: absolute;
  top: -${theme.getSize(4)};
  left: ${theme.getSize(1)};
  color: ${theme.colors.fromTheme().colorA.highlight + 'CC'};
  opacity: 0;
  transition: opacity 0.4s;
  ${p => p.show && 'opacity: 1;'}
`;
