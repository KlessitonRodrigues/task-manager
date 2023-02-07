import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    display: flex;
  `
);

export const NavigationBar = styled.div(
  props => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: ${props.theme.size(2)} 0;
    padding-left: ${props.theme.size(2)};
    background-color: ${props.theme.colors.current.main};
    color: ${props.theme.colors.white};
  `
);

export const ActionBar = styled.div(
  props => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: ${props.theme.size(27)} 0;
    background-color: ${props.theme.colors.current.bg1};
    color: ${props.theme.colors.black};
  `
);
