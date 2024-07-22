import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const ProgressLine = styled.div<Utils.CssProps>(
  ({ theme, w }) => css`
    width: 100%;
    background-color: ${theme.colors.bg4};
    border-radius: ${theme.radius.small};
    overflow: hidden;

    &::after {
      display: block;
      content: '${w}';
      width: ${w ?? '0%'};
      padding: ${cssSize(2)};
      padding-top: ${cssSize(2.5)};
      background-color: ${theme.colors.main};
      color: ${theme.colors.mainText};
      border-radius: ${theme.radius.small};
      font-size: 12px;
      font-weight: bold;
      line-height: 0;
      text-align: center;
      letter-spacing: 1px;
    }
  `,
);

export const ProgressStepBox = styled.div<Utils.CssProps>(
  () => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${cssSize(2)};
  `,
);

export const ProgressStep = styled.div<Utils.CssProps>(
  ({ theme, half }) => css`
    padding: ${cssSize(1)} ${cssSize(half ? 3 : 6)};
    background-color: ${theme.colors.main};
    border-radius: ${theme.radius.large};
  `,
);
