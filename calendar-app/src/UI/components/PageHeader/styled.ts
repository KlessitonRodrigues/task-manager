import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    display: flex;
    justify-content: space-between;
    padding: 0 ${props.theme.size(6)};
    padding-left: ${props.theme.size(16)};
    background-color: ${props.theme.colors.current.mainBg};
  `
);

export const Title = styled.h1``;

export const Collapse = styled.div(
  props => css`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    display: inline-flex;
    align-items: center;
    background-color: ${props.theme.colors.current.main};
    border-radius: 0 0 ${props.theme.border.radius.large} 0;
    color: ${props.theme.colors.white};
    padding: ${props.theme.size(2)};

    &:hover {
      width: 100%;
      border-radius: 0;
      & .expand {
        visibility: visible;
        width: auto;
        height: auto;
        opacity: 1;
        padding: 0 ${props.theme.size(2)};
      }
    }
  `
);

export const Show = styled.div(
  props => css`
    &:hover {
      border-radius: 0;
    }
  `
);

export const Expand = styled.div(
  props => css`
    visibility: hidden;
    width: 0;
    height: 0;
    opacity: 0;
  `
);

export const RightButtons = styled.div(
  props => css`
    display: flex;
    gap: ${props.theme.size(2)};
    padding: ${props.theme.size(2)};
  `
);
