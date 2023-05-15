import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    margin: ${props.theme.size(1)} 0 ${props.theme.size(4)};
  `
);

export const Label = styled.label(
  props => css`
    padding: ${props.theme.size(2)} 0 0;
    font-size: ${props.theme.fontSize.label};
    color: ${props.theme.colors.current.text1};
    display: flex;
    align-items: center;
    gap: ${props.theme.size(2)};
  `
);

export const InputField = styled.input(
  props => css`
    width: 100%;
    padding: ${props.theme.size(2)} 0;
    background-color: transparent;
    border: transparent;
    border-bottom: 1px solid ${props.theme.colors.current.main};
    color: ${props.theme.colors.current.main};
    font-size: ${props.theme.fontSize.small};
  `
);
