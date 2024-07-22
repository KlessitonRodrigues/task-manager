import styled, { css, keyframes } from 'styled-components';

import { cssSize } from 'src/styles/utils';

const fadeTopLeft = keyframes`
  from { width: 0%; height: 0%; border-bottom-right-radius: 100%; }
  to { width: 100%; height: 100%; }
`;

const fadeContent = keyframes`
  from { opacity: 0; }
  50% { opacity: 0; transform: translateY(1rem); }
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
  ({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    font-size: ${theme.fontSize.body};
    text-transform: capitalize;
    position: relative;
    margin-right: ${cssSize(4)};
    user-select: none;
  `,
);

// Navigation Bar
export const NavigationContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.white};
    padding: ${cssSize(1)};
    padding-top: ${cssSize(5)};

    :hover {
      ${NavigationLabel}, & ~ ${ActionContainer} ${ActionLabel} {
        width: ${cssSize(25)};
        opacity: 1;
      }
    }
  `,
);

export const NavigationDivisor = styled.div(
  () => css`
    height: 100%;
  `,
);

export const NavigationItem = styled.div<{ active: boolean }>(
  ({ theme, active }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${cssSize(3)};
    padding: ${cssSize(2)} ${cssSize(5)};
    padding-right: ${cssSize(3)};
    border-radius: ${theme.radius.medium};
    cursor: pointer;
    transition: 0.1s;
    opacity: ${active ? 1 : 0.6};
    border: 2px solid transparent;

    ${active &&
    css`
      ${NavigationIcon} {
        animation: ${iconSlide} 0.3s;
        opacity: 1;
      }
    `}

    :hover {
      border: 2px solid ${theme.colors.white};
      opacity: 1;
    }
  `,
);

export const NavigationIcon = styled.div(
  () => css`
    padding-top: ${cssSize(1)};
    font-size: ${cssSize(8)};
  `,
);

export const NavigationLabel = styled.div(
  () => css`
    width: 0;
    opacity: 0;
    overflow: hidden;
    transition: 0.3s ease-out;
  `,
);

// Action Bar
export const ActionContainer = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.bg2};
    padding-top: ${cssSize(5.5)};

    :hover {
      ${ActionLabel} {
        opacity: 1;
        width: ${cssSize(25)};
      }
    }
  `,
);

export const ActionItem = styled.div<{ active: boolean }>(
  ({ theme, active }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s;
    gap: ${cssSize(2)};
    padding: ${cssSize(3)} ${cssSize(7)};
    padding-right: ${cssSize(5)};
    margin-bottom: ${cssSize(2)};
    border-radius: ${theme.radius.medium};

    ${active && `color: ${theme.colors.main};`}

    :hover {
      background-color: ${theme.colors.bg3};
    }
  `,
);

export const ActionIcon = styled.div(
  () => css`
    padding-top: ${cssSize(1)};
    font-size: ${cssSize(6)};
  `,
);

export const ActionLabel = styled.div(
  () => css`
    width: 0;
    opacity: 0;
    overflow: hidden;
    transition: 0.3s ease-out;
  `,
);

// Panels
export const PanelContainer = styled.div<{ active: boolean }>(
  ({ active }) => css`
    height: 100%;
    left: 100%;
    width: 100vw;
    position: absolute;
    z-index: 1;
    background-color: #0006;
    animation: ${fadeBg} 0.3s ease-out;
    display: ${active ? 'block' : 'none'};
  `,
);

export const Panel = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: ${cssSize(250)};
    max-height: ${cssSize(200)};
    margin-left: ${cssSize(10)};
    margin-top: ${cssSize(10)};
    padding: ${cssSize(6)};
    background-color: ${theme.colors.bg1};
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.medium};
    border: ${theme.border.medium};
    animation: ${fadeTopLeft} 0.8s;

    & > * {
      animation: ${fadeContent} 0.5s ease-out;
    }
  `,
);

export const PanelHeader = styled.div(
  () => css`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  `,
);

export const PanelTitle = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${cssSize(4)};
    font-size: ${theme.fontSize.h3};
    margin-bottom: ${cssSize(4)};
  `,
);

export const PanelIcon = styled.div(
  () => css`
    padding-top: ${cssSize(1)};
    font-size: ${cssSize(6)};
  `,
);

export const PanelCloseBtn = styled.div(
  ({ theme }) => css`
    font-size: ${cssSize(6)};
    cursor: pointer;

    :hover {
      color: ${theme.colors.main};
    }
  `,
);
