import styled, { css } from 'styled-components';

export const Container = styled.div<{ size?: string }>(
  props => css`
    display: inline-flex;
    flex-direction: column;
    padding: ${props.theme.size(1)} 0;
    padding-right: ${props.theme.size(4)};
    width: ${props.size || 'auto'};
  `
);

export const Label = styled.span<{ show?: boolean }>(
  props => css`
    color: ${props.theme.colors.current.text1};
    padding-right: ${props.theme.size(2)};
    padding-bottom: ${props.theme.size(1)};
    font-size: ${props.theme.fontSize.label};
    display: ${props.show ? 'block' : 'none'};
  `
);

export const Value = styled.span<{ show?: boolean; color?: 'main' | 'none' }>(
  props => css`
    color: ${props.theme.colors.current.main};
    display: ${props.show ? 'block' : 'none'};
    color: ${props.color === 'none' && 'unset'};
    word-wrap: break-word;
    overflow: hidden;
  `
);
