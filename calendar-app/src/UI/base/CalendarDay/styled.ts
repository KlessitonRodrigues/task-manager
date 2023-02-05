import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 ${props.theme.size(1)};
    border-radius: ${props.theme.border.radius.small};
    overflow: hidden;
    transition: 0.5s padding;
  `
);

export const Header = styled.div<{ outOfMonth?: boolean }>(
  props => css`
    padding: ${props.theme.size(2)};
    border-radius: ${props.theme.border.radius.small};
    color: ${props.theme.colors.white};
    background-color: ${props.theme.colors.current.mainBg};
    font-weight: bold;
    user-select: none;

    :hover {
      background-color: ${props.theme.colors.current.mainHover};
    }

    ${props.outOfMonth && `background-color: ${props.theme.colors.gray}99;`}
  `
);

export const Content = styled.div(
  props => css`
    background-color: ${props.theme.colors.current.bg2};
    border-radius: ${props.theme.border.radius.medium};
    position: relative;
    height: 100%;

    .icon {
      opacity: 0;
      position: absolute;
      top: ${props.theme.size(2)};
      left: ${props.theme.size(2)};
    }

    :hover {
      .icon {
        opacity: 1;
      }
    }
  `
);
