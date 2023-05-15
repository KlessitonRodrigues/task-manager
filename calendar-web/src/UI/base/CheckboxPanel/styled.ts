import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    margin-bottom: ${props.theme.size(4)};
  `
);

export const Checkbox = styled.div<{
  checked?: boolean;
  iconSize?: string;
  color?: CheckboxPanelProps['options'][0]['color'];
}>(
  props => css`
    display: flex;
    align-items: center;
    gap: ${props.theme.size(2)};
    font-size: ${props.theme.fontSize.label};
    cursor: pointer;
    text-transform: capitalize;
    ${() => {
      const color = {
        red: props.theme.colors.red,
        yellow: props.theme.colors.yellow,
        green: props.theme.colors.green,
        main: props.theme.colors.current.main,
      };

      return css`
        color: ${color[props.color || 'main']};
        &:hover {
          color: ${color[props.color || 'main']}aa;
        }
      `;
    }}
    color: ${!props.checked && props.theme.colors.current.text2};
    transition: color 0.1s;

    & > svg {
      font-size: ${props.iconSize || '1.2rem'};
    }
  `
);

export const Label = styled.div<{ display?: boolean }>(
  props => css`
    padding-top: ${props.theme.size(2)};
    padding-bottom: ${props.theme.size(2)};
    font-size: ${props.theme.fontSize.label};
    color: ${props.theme.colors.current.text1};
    display: flex;
    align-items: center;
    gap: ${props.theme.size(2)};

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
