import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    margin: ${props.theme.size(4)} 0 ${props.theme.size(0)};
  `
);

export const Label = styled.h6(
  props => css`
    padding: ${props.theme.size(1)} 0;
  `
);

export const InputField = styled.input(
  props => css`
    width: 100%;
    padding: ${props.theme.size(1)} ${props.theme.size(2)};
    background-color: transparent;
    border: transparent;
    border-bottom: 1px solid ${props.theme.colors.current.main + '99'};
    border-left: 1px solid ${props.theme.colors.current.main + '99'};
    border-bottom-left-radius: 6px;
    color: ${props.theme.colors.current.main};
    font-size: ${props.theme.fontSize.h4};
  `
);
