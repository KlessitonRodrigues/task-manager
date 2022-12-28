import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div<{ show?: boolean }>`
  width: 100%;
  position: relative;
  cursor: pointer;
  margin-bottom: ${theme.size(1)};

  ::before {
    content: '';
    padding: ${theme.size(1)};
    border-left: 3px solid ${theme.colors.current().main}44;
    position: absolute;
    left: -${theme.size(2)};
    top: -${theme.size(2)};
    height: 80%;
    ${p => p.show && 'height: 98%;'}
  }

  :hover::before {
    border-left: 3px solid ${theme.colors.current().main};
  }
`;

export const DaysContainer = styled.div<{ show?: boolean }>`
  display: flex;
  overflow: hidden;

  .calendar-day {
    ${p => p.show && ` padding-top: ${theme.size(3)}; padding-bottom: ${theme.size(2)};    `}
  }

  .calendar-day-content {
    opacity: 0;
    height: 0;
    transition: height 0.4s ease-out, opacity 0.4s;
    ${p => p.show && 'height: 45vh; opacity: 1;'}
  }

  .calendar-day-button {
    ${p => !p.show && 'display: none;'}
  }
`;

export const TopLeft = styled.h5<{ show?: boolean }>`
  position: absolute;
  top: -${theme.size(3)};
  left: ${theme.size(1)};
  color: ${theme.colors.current().main};
  opacity: 0;
  transition: opacity 0.4s;
  ${p => p.show && 'opacity: 1;'}
`;
