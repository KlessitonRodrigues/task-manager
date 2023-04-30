import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { transform: translateY(-40rem); opacity: 0.6; }
  to { transform: translateY(0); opacity: 1; }
`;

const fadeBg = keyframes`
  from { background-color: #0000; }
  to { background-color: #0008; }
`;

export const Container = styled.div(
  props => css`
    display: flex;
    font-size: ${props.theme.fontSize.label};
    text-transform: capitalize;
    position: relative;
    margin-right: ${props.theme.size(4)};
  `
);

// Navigation Bar
export const NavigationContainer = styled.div(
  props => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props.theme.colors.current.mainBg};
    color: ${props.theme.colors.white};
    padding: ${props.theme.size(1)};
    padding-top: ${props.theme.size(5)};

    :hover {
      ${NavigationLabel} {
        display: block;
      }
      & ~ ${ActionContainer} ${ActionLabel} {
        display: block;
      }
    }
  `
);

export const NavigationItem = styled.div(
  props => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${props.theme.size(3)};
    padding: ${props.theme.size(2)} ${props.theme.size(5)};
    border-radius: ${props.theme.border.radius.medium};
    cursor: pointer;
    transition: 0.1s;

    :hover {
      background-color: ${props.theme.colors.white};
      color: ${props.theme.colors.current.main};
    }
  `
);

export const NavigationIcon = styled.div(
  props => css`
    padding-top: ${props.theme.size(1)};
    font-size: ${props.theme.size(8)};
  `
);

export const NavigationLabel = styled.div(
  props => css`
    display: none;
  `
);

// Action Bar
export const ActionContainer = styled.div(
  props => css`
    padding: ${props.theme.size(1)};
    background-color: ${props.theme.colors.current.bg2};
    padding-top: ${props.theme.size(5)};

    :hover {
      ${ActionLabel} {
        display: block;
      }
    }
  `
);

export const ActionItem = styled.div(
  props => css`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s;
    gap: ${props.theme.size(3)};
    padding: ${props.theme.size(2)} ${props.theme.size(5)};
    margin-bottom: ${props.theme.size(2)};
    border-radius: ${props.theme.border.radius.medium};

    :hover {
      background-color: ${props.theme.colors.current.bg3};
    }
  `
);

export const ActionIcon = styled.div(
  props => css`
    padding-top: ${props.theme.size(1)};
    font-size: ${props.theme.size(6)};
  `
);

export const ActionLabel = styled.div(
  props => css`
    display: none;
  `
);

// Panels
export const PanelContainer = styled.div<{ active: boolean }>(
  props => css`
    height: 100%;
    left: 100%;
    width: 90vw;
    position: absolute;
    background-color: #0008;
    animation: ${fadeBg} 0.6s ease-out;
    display: ${props.active ? 'block' : 'none'};
  `
);

export const Panel = styled.div(
  props => css`
    width: 100%;
    height: 100%;
    max-width: ${props.theme.size(250)};
    max-height: ${props.theme.size(200)};
    margin-left: ${props.theme.size(10)};
    margin-top: ${props.theme.size(10)};
    padding: ${props.theme.size(6)};
    background-color: ${props.theme.colors.current.bg1};
    border-radius: ${props.theme.border.radius.medium};
    box-shadow: ${props.theme.shadow.medium};
    animation: ${fadeIn} 0.6s ease-out;
  `
);
