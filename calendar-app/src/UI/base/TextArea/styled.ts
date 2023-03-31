import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    width: 100%;
    margin-bottom: ${props.theme.size(2)};
  `
);

export const TextAreaLabel = styled.label(
  props => css`
    display: flex;
    flex-direction: column;
    font-size: ${props.theme.fontSize.label};
    gap: ${props.theme.size(2)};
    position: relative;
  `
);

export const TextAreaInput = styled.textarea(
  props => css`
    font-family: unset;
    line-height: 1.2rem;
    outline: none;
    resize: vertical;
    background-color: transparent;
    border-radius: ${props.theme.border.radius.small};
    padding: ${props.theme.size(2)};
    height: ${props.theme.size(25)};
    min-height: ${props.theme.size(25)};
    max-height: ${props.theme.size(120)};
    border: ${props.theme.border.type.medium};
    color: ${props.theme.colors.current.text2};
  `
);
