import styled, { css } from 'styled-components';

export const Container = styled.div<{ bg?: string; border?: string; selected?: boolean }>(
  props => css`
    display: inline-block;
    width: ${props.theme.size(8)};
    height: ${props.theme.size(8)};
    margin-right: ${props.theme.size(2)};
    background-color: ${props.bg || 'transparent'};
    border: 2px solid ${props.theme.colors.current.bg1};
    border-radius: ${props.theme.border.radius.full};
    cursor: pointer;
    overflow: hidden;
    outline: 1px solid ${props.theme.colors.gray}88;

    ${props.selected && `outline-color: ${props.theme.colors.current.text2}`}
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
