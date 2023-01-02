import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    width: 100%;
    padding: ${props.theme.size(0, 1)};
    border-radius: ${props.theme.border.radius.small};
    overflow: hidden;
    position: relative;
    transition: padding-top 0.3s;

    .calendar-day-button {
      opacity: 0;
      transition: opacity 0.3s;
    }

    :hover {
      .calendar-day-button {
        opacity: 1;
      }
    }
  `
);

export const Header = styled.div<{ outOfMonth?: boolean }>(
  props => css`
    padding: ${props.theme.size(2)};
    margin-bottom: ${props.theme.size(4)};
    border-radius: ${props.theme.border.radius.small};
    color: ${props.theme.colors.white};
    background-color: ${props.theme.colors.current.mainBg};
    box-shadow: none;
    font-weight: bold;
    user-select: none;

    :hover {
      background-color: ${props.theme.colors.current.mainHover};
    }

    ${props.outOfMonth && `background-color: ${props.theme.colors.gray}99;`}
  `
);

export const Content = styled.div(
  props => css`
    background-color: ${props.theme.colors.current.bg2};
    border-radius: ${props.theme.border.radius.medium};
    height: 100%;
  `
);

export const AddButtonContainer = styled.div(
  props => css`
    position: absolute;
    bottom: ${props.theme.size(4)};
    right: ${props.theme.size(4)};
    font-size: ${props.theme.size(10)};
  `
);
