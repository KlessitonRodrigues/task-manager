import styled, { css, keyframes } from 'styled-components';

const slideUp = keyframes`
  from { transform: translateY(25px);}
  to { transform: translateY(0px);}
`;

const fadeOutIn = keyframes`
  from { opacity: 0;}
  to { opacity: 1;}
`;

export const Container = styled.div(() => css``);

export const IconContainer = styled.div<{ active: boolean; variant: string; disabled: boolean }>(
  props => css`
    width: 100%;
    min-height: ${props.theme.size(16)};
    min-width: ${props.theme.size(18)};
    padding: ${props.theme.size(1)} ${props.theme.size(2)};
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;

    // MAIN ICONS
    ${props.variant === 'logo' &&
    css`
      font-size: ${props.theme.fontSize.label};
      margin-bottom: ${props.theme.size(8)};
      padding-right: ${props.theme.size(4)};

      ${Icon} {
        font-size: ${props.theme.size(10)};
      }
    `}

    // NAVIGATION ICONS
    ${props.variant === 'main' &&
    css`
      font-size: ${props.theme.fontSize.h6};
      color: ${props.theme.colors.white}aa;
      border-top-left-radius: ${props.theme.border.radius.large};
      border-bottom-left-radius: ${props.theme.border.radius.large};
      justify-content: flex-start;
      flex-direction: row;
      gap: ${props.theme.size(4)};

      ${Icon} {
        font-size: ${props.theme.size(9)};
      }

      ${Label} {
        width: 0;
        opacity: 0;
      }

      ${props.active &&
      css`
        background-color: ${props.theme.colors.current.bg1};
        color: ${props.theme.colors.current.text1};
        ${Icon} {
          animation: ${slideUp} 0.5s;
        }
      `}

      ${!props.active &&
      css`
        :hover {
          color: ${props.theme.colors.white};
        }
      `}
    `}

    // ACTION ICONS
    ${props.variant === 'subIcon' &&
    css`
      font-size: ${props.theme.fontSize.label};
      color: ${props.theme.colors.current.text1}aa;
      margin-bottom: ${props.theme.size(6)};
      animation: ${fadeOutIn} 1s;
      transition: opacity 0.5s;
      ${props.disabled && `opacity: 0.3; cursor: default;`};

      :hover {
        color: ${props.theme.colors.current.text1};
      }

      ${Icon} {
        font-size: ${props.theme.size(8)};
      }
    `}
  `
);

export const Icon = styled.div(() => css``);

export const Label = styled.div(
  () => css`
    transition: width 0.5s ease-out, opacity 0.5s ease-out;
    overflow: hidden;
    text-transform: capitalize;
  `
);

export const RoundedCorner = styled.div<{ top?: boolean; active: boolean }>(
  props => css`
    background-color: ${props.theme.colors.current.mainBg};
    border-top-right-radius: ${!props.top && props.theme.border.radius.large};
    border-bottom-right-radius: ${props.top && props.theme.border.radius.large};
    ${props.active && ` height: ${props.theme.size(3)};`};
  `
);

export const RoundedCornerBg = styled.div(
  props => css`
    background-color: ${props.theme.colors.current.bg1};
  `
);
