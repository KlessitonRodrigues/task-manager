import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div<{ show?: boolean }>`
  width: ${theme.getSize(150)};
  background-color: ${theme.colors.fromTheme().bg1};
  border-top-left-radius: ${theme.border.radius['2']};
  transition: 500ms width;
  position: fixed;
  right: 0;
  bottom: 0;
  height: 90vh;
  padding: ${theme.getSize(4)};
  box-shadow: ${theme.shadow['3']};

  ${({ show }) =>
    !show &&
    `
    width: ${theme.getSize(0)};
    padding: 0;
    color: transparent;
    & > * {
      opacity: 0;
    }
  `}
`;
