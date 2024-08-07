import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Hr = styled.hr<Utils.CssProps>(
  ({ theme }) => css`
    width: 100%;
    border-bottom: ${theme.border.small};
    margin-bottom: ${cssSize(2)};
  `,
);
