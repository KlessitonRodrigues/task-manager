import styled, { css } from 'styled-components';

export const Container = styled.div<{ show?: boolean }>(
  props => css`
    width: 0;
    height: 100vh;
    background-color: #0006;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    opacity: 0;
    transition: 0.2s opacity ease-out;

    ${props.show && 'width: 100vw; opacity: 1'}
  `
);

export const SidePanelContainer = styled.div<{ show?: boolean }>(
  props => css`
    background-color: ${props.theme.colors.current.bg1};
    border-top-left-radius: ${props.theme.border.radius.medium};
    box-shadow: ${props.theme.shadow.mediumGray};
    position: fixed;
    right: 0;
    bottom: 0;
    height: 90vh;
    width: 0;
    padding: 0;
    transition: 0.3s width ease-out;
    user-select: none;
    ${props.show && `width: ${props.theme.size(150)}; padding: ${props.theme.size(4)};`}

    & * {
      opacity: 0;
      transition: opacity 0.4s ease-in;
      ${props.show && `opacity: 1`};
    }
  `
);
