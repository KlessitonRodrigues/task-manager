import styled, { css } from 'styled-components';

export const Container = styled.div<{ active: boolean; variant: string }>(
  props => css`
    width: 100%;
    width: ${props.theme.size(20)};
    padding: ${props.theme.size(2)};
    margin-bottom: ${props.theme.size(8)};
    border-top-left-radius: ${props.theme.border.radius.medium};
    border-bottom-left-radius: ${props.theme.border.radius.medium};
    cursor: pointer;
    position: relative;

    ${props.variant === 'logo' &&
    css`
      font-size: ${props.theme.fontSize.label};

      ${Icon} {
        font-size: ${props.theme.size(10)};
      }
    `}

    ${props.variant === 'main' &&
    css`
      font-size: ${props.theme.fontSize.label};

      ${props.active &&
      css`
        background-color: ${props.theme.colors.current.bg1};
        color: ${props.theme.colors.current.text1};
      `}

      ${Icon} {
        font-size: ${props.theme.size(7)};
      }
    `}

    ${props.variant === 'subIcon' &&
    css`
      font-size: ${props.theme.fontSize.label};

      ${Icon} {
        font-size: ${props.theme.size(6)};
      }
    `}
  `
);

export const Icon = styled.div(() => css``);

export const Label = styled.label(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
);

export const IconCorner = styled.div(props => css``);
