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
    margin-top: ${props.theme.size(1)};
  `
);

export const Row = styled.div<{ expanded?: boolean }>(
  props => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${props.theme.size(1)};
    padding: ${props.theme.size(2)} ${props.theme.size(4)};
    margin-bottom: ${props.theme.size(2)};
    background-color: ${props.theme.colors.current.mainBg};
    color: ${props.theme.colors.white};
    border-radius: ${props.theme.border.radius.small};
    text-transform: capitalize;
    ${props.expanded && `color: ${props.theme.colors.white};`}

    :hover {
      color: ${props.theme.colors.white}aa;
    }

    ${Icon} {
      transition: transform 0.6s;
      ${props.expanded && ` transform: rotateZ(90deg);`}
    }
  `
);
