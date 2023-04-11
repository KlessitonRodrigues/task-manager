import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    position: relative;
    cursor: pointer;
    transition: 0.5s height;
    height: ${props.theme.size(12)};

    ::before {
      content: '';
      padding: ${props.theme.size(1)};
      border-left: 5px solid ${props.theme.colors.current.main}55;
      position: absolute;
      right: -${props.theme.size(4)};
      top: 0;
      height: 85%;
    }

    :hover::before {
      border-left-color: ${props.theme.colors.current.main};
    }
  `
);

export const DaysContainer = styled.div(
  () => css`
    display: flex;
    overflow: hidden;
    height: 100%;
  `
);

export const TopLeft = styled.span(
  props => css`
    position: absolute;
    top: -${props.theme.size(3)};
    left: ${props.theme.size(1)};
    color: ${props.theme.colors.current.main};
    opacity: 0;
    transition: opacity 0.5s;
  `
);
