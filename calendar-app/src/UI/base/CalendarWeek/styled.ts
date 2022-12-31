import styled, { css } from 'styled-components';

export const Container = styled.div<{ show?: boolean }>(
  props => css`
    width: 100%;
    position: relative;
    cursor: pointer;
    margin-bottom: ${props.theme.size(1)};

    ::before {
      content: '';
      padding: ${props.theme.size(1)};
      border-left: 3px solid ${props.theme.colors.current.main}44;
      position: absolute;
      left: -${props.theme.size(2)};
      top: -${props.theme.size(2)};
      height: 80%;
      ${props.show && 'height: 98%;'}
    }

    :hover::before {
      border-left: 3px solid ${props.theme.colors.current.main};
    }
  `
);

export const DaysContainer = styled.div<{ show?: boolean }>(
  props => css`
    display: flex;
    overflow: hidden;

    .calendar-day {
      ${props.show &&
      ` padding-top: ${props.theme.size(3)}; padding-bottom: ${props.theme.size(2)};    `}
    }

    .calendar-day-content {
      opacity: 0;
      height: 0;
      transition: height 0.4s ease-out, opacity 0.4s;
      ${props.show && 'height: 45vh; opacity: 1;'}
    }

    .calendar-day-button {
      ${!props.show && 'display: none;'}
    }
  `
);

export const TopLeft = styled.h5<{ show?: boolean }>(
  props => css`
    position: absolute;
    top: -${props.theme.size(3)};
    left: ${props.theme.size(1)};
    color: ${props.theme.colors.current.main};
    opacity: 0;
    transition: opacity 0.4s;
    ${props.show && 'opacity: 1;'}
  `
);
