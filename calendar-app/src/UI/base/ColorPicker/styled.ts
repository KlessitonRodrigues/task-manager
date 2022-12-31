import styled, { css } from 'styled-components';

export const Container = styled.div<{ bg?: string; border?: string }>(
  props => css`
    display: inline-block;
    border-radius: ${props.theme.border.radius.full};
    width: ${props.theme.size(8)};
    height: ${props.theme.size(8)};
    margin-right: ${props.theme.size(2)};
    background-color: ${props.bg || 'transparent'};
    cursor: pointer;
    overflow: hidden;
  `
);

export const Input = styled.input(
  props => css`
    opacity: 0;
    padding: 0;
    height: 0;
    width: 0;
  `
);

export const InputContainer = styled.label(
  props => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
  `
);
