import styled, { css } from 'styled-components';

import * as weekStyles from '../../base/CalendarWeek/styled';

export const Container = styled.div(
  props => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: ${props.theme.size(2)};
  `
);

export const Content = styled.div<{ week: number }>(
  props => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: ${props.theme.size(4)};
    padding-right: ${props.theme.size(4)};
    gap: ${props.theme.size(3)};

    ${weekStyles.Container} {
      :nth-child(${props.week}) {
        height: 100%;

        ::before {
          height: 99%;
        }
      }
    }
  `
);
