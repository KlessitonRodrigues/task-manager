import styled, { css } from 'styled-components';

import * as CalendarDay from '../CalendarDay/styled';

export const Container = styled.div<{ show?: boolean }>(
  props => css`
    position: relative;
    cursor: pointer;
    transition: 0.5s height;
    height: ${props.theme.size(12)};

    ::before {
      content: '';
      padding: ${props.theme.size(1)};
      border-left: 4px solid ${props.theme.colors.current.main}66;
      position: absolute;
      left: -${props.theme.size(3)};
      top: 0;
      height: ${props.show ? '99%' : '85%'};
    }

    :hover::before {
      border-left-color: ${props.theme.colors.current.main};
    }

    ${props.show &&
    css`
      height: 100%;

      ${TopLeft} {
        opacity: 1;
      }

      ${CalendarDay.Content} {
        height: 100%;
      }
    `}
  `
);

export const DaysContainer = styled.div(
  () => css`
    display: flex;
    overflow: hidden;
    height: 100%;
  `
);

export const TopLeft = styled.span(
  props => css`
    position: absolute;
    top: -${props.theme.size(3)};
    left: ${props.theme.size(1)};
    color: ${props.theme.colors.current.main};
    opacity: 0;
    transition: opacity 0.5s;
  `
);
