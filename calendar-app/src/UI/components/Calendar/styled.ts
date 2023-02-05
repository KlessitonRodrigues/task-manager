import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: ${props.theme.size(2)};
    padding-bottom: ${props.theme.size(4)};
  `
);

export const Content = styled.div(
  props => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: ${props.theme.size(2)};
    padding: 0 ${props.theme.size(4)};
  `
);
