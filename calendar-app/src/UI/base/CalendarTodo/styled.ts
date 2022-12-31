import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    padding: ${props.theme.size(1, 2)};
    margin: ${props.theme.size(1)} 0;
    border: 1px solid ${props.theme.colors.gray + '44'};
    border-left: 5px solid ${props.theme.colors.gray + '99'};
    border-radius: ${props.theme.border.radius.small};
    background-color: ${props.theme.colors.current.bg1};
    cursor: pointer;

    &:hover {
      border-top: 1px solid ${props.theme.colors.gray + 'AA'};
      border-bottom: 1px solid ${props.theme.colors.gray + 'AA'};
      border-right: 1px solid ${props.theme.colors.gray + 'AA'};
    }
  `
);

export const Column = styled.div(
  props => css`
    display: flex;
    flex-direction: column;
  `
);

export const Time = styled.h6(
  props => css`
    color: ${props.theme.colors.current.main};
  `
);

export const Title = styled.h5(
  props => css`
    padding: ${props.theme.size(1)} 0;
    text-transform: capitalize;
  `
);

export const Tags = styled.div(
  props => css`
    padding: ${props.theme.size(2)};
  `
);
