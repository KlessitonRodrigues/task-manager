import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    display: flex;
  `
);

export const Tab = styled.div<{ active?: boolean }>(
  props => css`
    padding: ${props.theme.size(2)} ${props.theme.size(5)};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-family: monospace;
    color: ${props.theme.colors.current.text1};
    border-radius: ${props.theme.size(4, 4)} 0 0;
    transition: color 0.2s, background-color 0.2s;
    user-select: none;
    ${props.active && `background-color: ${props.theme.colors.current.bg1};`}
    ${!props.active &&
    css`
      color: ${props.theme.colors.white};
      :hover {
        background-color: ${props.theme.colors.current.bg1}55;
      }
    `}
  `
);

export const IconContainer = styled.div(
  props => css`
    width: ${props.theme.size(6)};
  `
);

export const Border = styled.div<{ left?: boolean }>(
  props => css`
    background-color: ${props.theme.colors.current.mainBg};
    padding: 0 ${props.theme.size(2)};
    border-radius: 0 0 ${props.left ? `${props.theme.size(4)} 0` : `0 ${props.theme.size(4)}`};
    height: 100%;
  `
);

export const BorderBackground = styled.div<{ active?: boolean }>(
  props => css`
    background-color: ${props.theme.colors.current.bg1};
    opacity: 0;
    transition: opacity 0.1s;
    ${props.active && 'opacity: 1;'}
  `
);
