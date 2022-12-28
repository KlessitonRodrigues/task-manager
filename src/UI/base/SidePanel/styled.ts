import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div<{ show?: boolean }>`
  width: 0;
  height: 100vh;
  background-color: #0006;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: 0;
  transition: 0.3s opacity;

  ${p => p.show && 'width: 100vw; opacity: 1'}
`;

export const SidePanelContainer = styled.div<{ show?: boolean }>`
  background-color: ${theme.colors.current().bg1};
  border-top-left-radius: ${theme.border.radius.medium};
  box-shadow: ${theme.shadow['3']};
  position: fixed;
  right: 0;
  bottom: 0;
  height: 90vh;
  width: 0;
  opacity: 0;
  padding: 0;
  transition: 0.5s width, 0.5s opacity ease-out;

  ${p => p.show && `width: ${theme.size(150)}; padding: ${theme.size(4)}; opacity: 1;`}
`;
