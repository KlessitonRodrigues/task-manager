import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
    position: relative;
    cursor: pointer;

    :hover {
      ${Expanded} {
        display: inline-flex;
      }
    }
  `
);

export const Icon = styled.div<{ required: boolean }>(
  props => css`
    display: flex;
    align-items: center;
    color: ${props.required ? props.theme.colors.red : 'inherit'};
  `
);

export const Expanded = styled.div(
  props => css`
    display: none;
    gap: ${props.theme.size(2)};
    position: absolute;
    left: 150%;
    top: -50%;
    width: max-content;
    max-width: ${props.theme.size(150)};
    padding: ${props.theme.size(1)};
    padding-left: ${props.theme.size(2)};
    background-color: ${props.theme.colors.current.bg1};
    color: ${props.theme.colors.current.text1};
    border-radius: ${props.theme.border.radius.verySmall};
    border: 1px solid ${props.theme.colors.current.text3};
    font-size: ${props.theme.fontSize.verySmall};
  `
);

export const Required = styled.div(
  props => css`
    color: ${props.theme.colors.red};
  `
);

export const Description = styled.div(
  () => css`
    word-wrap: break-word;
    white-space: break-spaces;
    text-transform: lowercase;
  `
);
