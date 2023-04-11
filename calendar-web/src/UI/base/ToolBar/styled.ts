import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
    display: flex;
    user-select: none;
  `
);

export const NavigationBar = styled.div(
  props => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${props.theme.size(2)} 0;
    padding-left: ${props.theme.size(2)};
    background-color: ${props.theme.colors.current.mainBg};
    color: ${props.theme.colors.white};
    width: ${props.theme.size(20)};
    transition: width 1s;
    overflow: hidden;

    :hover {
      width: ${props.theme.size(45)};
    }
  `
);

export const NavIcons = styled.div(
  () => css`
    height: 100%;
  `
);

export const FooterIcons = styled.div(() => css``);

export const ActionBar = styled.div(
  props => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: ${props.theme.size(38)};
  `
);

export const FormPanel = styled.div(() => css``);
