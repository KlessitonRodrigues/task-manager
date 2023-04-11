import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    margin: ${props.theme.size(4)} 0 ${props.theme.size(4)};
    position: relative;
    cursor: pointer;
  `
);

export const Row = styled.div<{ expanded?: boolean }>(
  props => css`
    display: flex;
    align-items: center;
    gap: ${props.theme.size(2)};
    padding: ${props.theme.size(1)} ${props.theme.size(2)};
    margin-bottom: ${props.theme.size(4)};
    background-color: ${props.theme.colors.current.bg3};
    border-radius: ${props.theme.border.radius.small};
    color: ${props.theme.colors.current.text2};
    text-transform: capitalize;

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
    transition: max-height 0.6s ease-out;
    max-height: 0;
    padding: 0 ${props.theme.size(1)};
    padding-left: ${props.theme.size(4)};
    margin-left: ${props.theme.size(2)};
    border-left: ${props.theme.border.type.large};
    ${props.expanded && `max-height: 200px`}
  `
);
