import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    margin: 0 0 ${props.theme.size(2)};
    color: ${props.theme.colors.current.text3};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${props.theme.size(2)};
  `
);

export const Title = styled.h2(
  props => css`
    display: flex;
    align-items: center;
    gap: ${props.theme.size(2)};
  `
);

export const CloseBtn = styled.div(
  props => css`
    cursor: pointer;

    &:hover {
      color: ${props.theme.colors.current.main}aa;
      border-radius: 100px;
    }
  `
);
