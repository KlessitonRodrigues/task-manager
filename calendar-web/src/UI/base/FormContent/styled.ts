import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    margin: ${props.theme.size(1)} 0 ${props.theme.size(1)};
    position: relative;
    cursor: pointer;
  `
);

export const Row = styled.div<{ expanded?: boolean }>(
  props => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${props.theme.size(2)};
    padding: ${props.theme.size(1)} ${props.theme.size(4)};
    margin-bottom: ${props.theme.size(4)};
    background-color: ${props.theme.colors.current.bg3};
    border-radius: ${props.theme.border.radius.small};
    color: ${props.theme.colors.current.text1};
    text-transform: capitalize;
    transition: background-color 0.2s;

    ${props.expanded &&
    css`
      color: ${props.theme.colors.white};
      background-color: ${props.theme.colors.current.mainBg};
    `}

    ${Icon} {
      transition: transform 0.6s;
      ${props.expanded && ` transform: rotateZ(90deg);`}
    }
  `
);

export const Icon = styled.span(
  props => css`
    margin-top: ${props.theme.size(1)};
    font-size: ${props.theme.fontSize.h3};
  `
);

export const Label = styled.label(
  props => css`
    font-size: ${props.theme.fontSize.label};
  `
);

export const Content = styled.div<{ expanded?: boolean }>(
  props => css`
    overflow: hidden;
    max-height: 0rem;
    height: 100%;
    transition: max-height 0.6s ease-out;

    ${props.expanded &&
    css`
      max-height: 100rem;
    `}
  `
);
