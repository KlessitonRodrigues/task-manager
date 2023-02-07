import styled, { css } from 'styled-components';

export const Container = styled.div<{ active: boolean; variant: string }>(
  props => css`
    width: 100%;
    min-height: ${props.theme.size(18)};
    padding: ${props.theme.size(1)} ${props.theme.size(2)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;

    ${props.variant === 'logo' &&
    css`
      font-size: ${props.theme.fontSize.label};
      padding-right: ${props.theme.size(4)};

      ${Icon} {
        font-size: ${props.theme.size(10)};
      }
    `}

    ${props.variant === 'main' &&
    css`
      font-size: ${props.theme.fontSize.label};
      color: ${props.theme.colors.white}aa;
      margin-bottom: ${props.theme.size(4)};
      padding-right: ${props.theme.size(4)};
      border-top-left-radius: ${props.theme.border.radius.large};
      border-bottom-left-radius: ${props.theme.border.radius.large};

      ${Icon} {
        font-size: ${props.theme.size(7)};
      }

      ${props.active &&
      css`
        background-color: ${props.theme.colors.current.bg1};
        color: ${props.theme.colors.current.text1};
        margin-bottom: 0;
      `}

      ${!props.active &&
      css`
        :hover {
          color: ${props.theme.colors.white};
        }
      `}
    `}

    ${props.variant === 'subIcon' &&
    css`
      font-size: ${props.theme.fontSize.label};
      margin-bottom: ${props.theme.size(4)};
      color: ${props.theme.colors.current.text1}aa;

      :hover {
        color: ${props.theme.colors.current.text1};
      }

      ${Icon} {
        font-size: ${props.theme.size(7)};
      }
    `}
  `
);

export const Icon = styled.div(() => css``);

export const Label = styled.div(() => css``);

export const RoundedCorner = styled.div<{ top?: boolean; active: boolean }>(
  props => css`
    ${props.active && `height: ${props.theme.size(4)}`};
    background-color: ${props.theme.colors.current.main};
    border-top-right-radius: ${!props.top && props.theme.border.radius.large};
    border-bottom-right-radius: ${props.top && props.theme.border.radius.large};
  `
);

export const RoundedCornerBg = styled.div(
  props => css`
    background-color: ${props.theme.colors.current.bg1};
  `
);
