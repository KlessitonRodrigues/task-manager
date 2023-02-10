import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    margin: ${props.theme.size(4)} 0 ${props.theme.size(4)};
    position: relative;
    cursor: pointer;
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
    ${props.expanded && `max-height: 200px`}
  `
);

export const Icon = styled.span(
  props => css`
    position: absolute;
    left: ${props.theme.size(2)};
    top: ${props.theme.size(2.2)};
  `
);

export const Row = styled.div<{ expanded?: boolean }>(
  props => css`
    display: flex;
    align-items: center;
    gap: ${props.theme.size(1)};
    padding: ${props.theme.size(2)};
    padding-left: ${props.theme.size(9)};
    margin-bottom: ${props.theme.size(2)};
    background-color: ${props.theme.colors.current.bg3};
    border-radius: ${props.theme.border.radius.small};
    border: 1px solid transparent;
    color: ${props.theme.colors.current.text3};
    text-transform: capitalize;
    ${props.expanded && `color: ${props.theme.colors.current.main};`}

    :hover {
      background-color: ${props.theme.colors.current.bg3};
    }

    ${Icon} {
      transition: transform 0.6s;
      ${props.expanded && `transform: rotateZ(90deg);`}
    }
  `
);
