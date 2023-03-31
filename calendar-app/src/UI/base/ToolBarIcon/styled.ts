import styled, { css, keyframes } from 'styled-components';

const navTransition = keyframes`
  from {transform: translateX(-4rem)}
`;

// NAVIGATION ICON
export const NavIconContainer = styled.div<{ act?: boolean }>(
  props => css`
    height: ${props.theme.size(16)};
    padding: ${props.theme.size(4)};
    width: auto;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-top-left-radius: ${props.theme.border.radius.medium};
    border-bottom-left-radius: ${props.theme.border.radius.medium};
    text-transform: capitalize;
    overflow: hidden;

    ${props.act &&
    css`
      background-color: ${props.theme.colors.current.bg1};
      color: ${props.theme.colors.current.main};
      :hover {
        color: ${props.theme.colors.current.main};
      }
      ${NavIcon} {
        animation: ${navTransition} 0.5s;
      }
    `}
  `
);

export const NavIcon = styled.div(
  props => css`
    font-size: ${props.theme.size(8)};
    margin-top: ${props.theme.size(1)};
    margin-right: ${props.theme.size(4)};
  `
);

export const NavIconLabel = styled.div(
  props => css`
    width: 100%;
    overflow: hidden;
    transition: width 0.3s ease-out;
    font-size: ${props.theme.fontSize.label};
  `
);

// FORM ICON
export const FormIconContainer = styled.div<{ act?: boolean }>(
  props => css`
    height: ${props.theme.size(16)};
    width: ${props.theme.size(16)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props.theme.colors.current.text3};
    cursor: pointer;
    :hover {
      color: ${props.theme.colors.current.main};
      ${FormIconLabel} {
        width: 100%;
        max-width: ${props.theme.size(20)};
      }
    }

    ${props.act &&
    css`
      color: ${props.theme.colors.current.main};
    `}
  `
);

export const FormIcon = styled.div(
  props => css`
    font-size: ${props.theme.size(7)};
  `
);

export const FormIconLabel = styled.div(
  props => css`
    width: 0;
    overflow: hidden;
    transition: width 0.75s ease-out;
    text-align: center;
    font-size: ${props.theme.fontSize.label};
  `
);

// LOGO ICON
export const LogoIconContainer = styled.div(
  props => css`
    margin-bottom: ${props.theme.size(14)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
);

export const LogoIcon = styled.div(
  props => css`
    font-size: ${props.theme.size(10)};
  `
);

export const LogoIconLabel = styled.div(
  props => css`
    color: ${props.theme.colors.white};
  `
);
