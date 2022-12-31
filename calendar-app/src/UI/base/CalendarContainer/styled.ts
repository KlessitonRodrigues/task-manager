import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    width: 100%;
    padding: ${props.theme.size(0, 4)};
  `
);

export const DaysContainer = styled.div(
  props => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: ${props.theme.size(3)};
  `
);
