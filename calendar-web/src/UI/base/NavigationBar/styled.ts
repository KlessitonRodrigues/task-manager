import styled, { css, keyframes } from 'styled-components';

const fadeTopLeft = keyframes`
  from { width: 0%; height: 0%; border-bottom-right-radius: 100%; }
  to { width: 100%; height: 100%; }
`;

const fadeContent = keyframes`
  from { opacity: 0; }
  50% { opacity: 0; }
  to { opacity: 1; }
`;

const fadeBg = keyframes`
  from { background-color: #0000; }
  to { background-color: #0006; }
`;

const iconSlide = keyframes`
  from {transform: translateX(-4rem); opacity: 0;}
`;

export const Container = styled.div(
  props => css`
    display: flex;
    font-size: ${props.theme.fontSize.body};
    text-transform: capitalize;
    position: relative;
    margin-right: ${props.theme.size(4)};
    user-select: none;
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
      ${NavigationLabel}, & ~ ${ActionContainer} ${ActionLabel} {
        width: ${props.theme.size(25)};
        opacity: 1;
      }
    }
  `
);

export const NavigationDivisor = styled.div(
  () => css`
    height: 100%;
  `
);

export const NavigationItem = styled.div<{ active: boolean }>(
  props => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${props.theme.size(3)};
    padding: ${props.theme.size(2)} ${props.theme.size(5)};
    padding-right: ${props.theme.size(3)};
    border-radius: ${props.theme.border.radius.medium};
    cursor: pointer;
    transition: 0.1s;
    opacity: ${props.active ? 1 : 0.6};
    border: 2px solid transparent;

    ${props.active &&
    css`
      ${NavigationIcon} {
        animation: ${iconSlide} 0.3s;
        opacity: 1;
      }
    `}

    :hover {
      border: 2px solid ${props.theme.colors.white};
      opacity: 1;
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
    width: 0;
    opacity: 0;
    overflow: hidden;
    transition: 0.3s ease-out;
  `
);

// Action Bar
export const ActionContainer = styled.div(
  props => css`
    background-color: ${props.theme.colors.current.bg2};
    padding-top: ${props.theme.size(5.5)};

    :hover {
      ${ActionLabel} {
        opacity: 1;
        width: ${props.theme.size(25)};
      }
    }
  `
);

export const ActionItem = styled.div<{ active: boolean }>(
  props => css`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s;
    gap: ${props.theme.size(2)};
    padding: ${props.theme.size(3)} ${props.theme.size(7)};
    padding-right: ${props.theme.size(5)};
    margin-bottom: ${props.theme.size(2)};
    border-radius: ${props.theme.border.radius.medium};

    ${props.active && `color: ${props.theme.colors.current.main};`}

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
    width: 0;
    opacity: 0;
    overflow: hidden;
    transition: 0.3s ease-out;
  `
);

// Panels
export const PanelContainer = styled.div<{ active: boolean }>(
  props => css`
    height: 100%;
    left: 100%;
    width: 100vw;
    position: absolute;
    z-index: 1;
    background-color: #0006;
    animation: ${fadeBg} 0.3s ease-out;
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
    border: ${props.theme.border.type.medium};
    animation: ${fadeTopLeft} 0.8s;

    & > * {
      animation: ${fadeContent} 0.6s ease-out;
    }
  `
);

export const PanelHeader = styled.div(
  () => css`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  `
);

export const PanelTitle = styled.div(
  props => css`
    display: flex;
    align-items: center;
    gap: ${props.theme.size(4)};
    font-size: ${props.theme.fontSize.h3};
    margin-bottom: ${props.theme.size(4)};
  `
);

export const PanelIcon = styled.div(
  props => css`
    padding-top: ${props.theme.size(1)};
    font-size: ${props.theme.size(6)};
  `
);

export const PanelCloseBtn = styled.div(
  props => css`
    font-size: ${props.theme.size(6)};
    cursor: pointer;

    :hover {
      color: ${props.theme.colors.current.main};
    }
  `
);
