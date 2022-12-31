import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    margin: ${props.theme.size(2)} 0 ${props.theme.size(2)};
  `
);

export const Label = styled.h5<{ noLine?: boolean }>(
  props => css`
    margin: ${props.theme.size(2)} 0;
    padding: ${props.theme.size(1)} 0;
    color: ${props.theme.colors.current.text3};
    ${!props.noLine && `border-bottom: 1px solid ${props.theme.colors.gray + '33'};`}
  `
);

export const Content = styled.div``;
