import styled, { css } from 'styled-components';

type ContainerProps = { color?: string; size: number };

export const Container = styled.div<ContainerProps>(
  props => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${props.theme.size(props.size || 7)};
  `
);
