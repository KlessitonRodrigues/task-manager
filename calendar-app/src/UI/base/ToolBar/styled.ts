import styled, { css } from 'styled-components';

import * as ToolBarIcon from '../ToolBarIcon/styled';

export const Container = styled.div(
  () => css`
    display: flex;
  `
);

export const NavigationBar = styled.div(
  props => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: ${props.theme.size(2)} 0;
    padding-left: ${props.theme.size(3)};
    background-color: ${props.theme.colors.current.main};
    color: ${props.theme.colors.white};

    :hover ${ToolBarIcon.Container}.icon-main {
      ${ToolBarIcon.Label} {
        width: ${props.theme.size(30)};
        opacity: 1;
      }
    }
  `
);

export const ActionBar = styled.div(
  props => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: ${props.theme.size(26)} 0;
  `
);

export const Panel = styled.div(
  props => css`
    min-width: ${props.theme.size(100)};
    padding: ${props.theme.size(4)};
    height: 100%;
    display: flex;
    background-color: ${props.theme.colors.current.bg2};
  `
);
