import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 0 ${theme.getSize(2)};
  position: relative;
`;

export const DaysContainer = styled.div<{ show?: boolean }>`
  display: flex;

  .calendar-day-content {
    opacity: 0;
    height: 0;
    transition: height 0.4s, opacity 0.4s;
    ${p => p.show && 'height: 30vh; opacity: 1;'};
  }
`;

export const TopLeft = styled.h5<{ show?: boolean }>`
  position: absolute;
  top: -${theme.getSize(4)};
  left: ${theme.getSize(1)};
  color: ${theme.colors.fromTheme().colorA['900'] + 'CC'};
  opacity: 0;
  transition: opacity 0.4s;
  ${p => p.show && 'opacity: 1;'}
`;
