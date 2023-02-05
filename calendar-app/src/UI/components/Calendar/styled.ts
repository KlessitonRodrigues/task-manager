import styled, { css } from 'styled-components';

import * as weekComponents from '../../base/CalendarWeek/styled';

export const Container = styled.div(
  props => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: ${props.theme.size(4)};
    padding-top: ${props.theme.size(2)};
  `
);

export const Content = styled.div<{ week: number }>(
  props => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: ${props.theme.size(3)};

    ${weekComponents.Container} {
      :nth-child(${props.week}) {
        height: 100%;

        ::before {
          height: 99%;
        }
      }
    }
  `
);
