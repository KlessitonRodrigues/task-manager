import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    margin-bottom: ${props.theme.size(4)};
  `
);

export const Checkbox = styled.div<{ checked?: boolean; iconSize?: string }>(
  props => css`
    display: flex;
    align-items: center;
    gap: ${props.theme.size(2)};
    font-size: ${props.theme.fontSize.label};
    color: ${props.checked ? props.theme.colors.current.main : props.theme.colors.current.text2};
    cursor: pointer;
    text-transform: capitalize;

    & > svg {
      font-size: ${props.iconSize || '1rem'};
    }

    &:hover {
      color: ${props.theme.colors.current.main}aa;
    }
  `
);

export const Label = styled.div<{ display?: boolean }>(
  props => css`
    padding-top: ${props.theme.size(2)};
    padding-bottom: ${props.theme.size(4)};
    font-size: ${props.theme.fontSize.label};
    color: ${props.theme.colors.current.text1};

    ${!props.display && 'display: none;'}
  `
);

export const CheckboxContainer = styled.div(
  props => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${props.theme.size(4)};
  `
);
