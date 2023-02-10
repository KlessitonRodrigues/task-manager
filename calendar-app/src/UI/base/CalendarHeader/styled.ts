import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    padding: ${props.theme.size(0)} 0;
  `
);

export const Weekday = styled.div(
  props => css`
    display: block;
    text-align: center;
    font-weight: bold;
    width: 100%;
    padding: ${props.theme.size(2)};
    color: ${props.theme.colors.current.text2};
    border-radius: ${props.theme.border.radius.small};
  `
);

export const WeekdayContainer = styled.div(
  props => css`
    display: flex;
    gap: ${props.theme.size(2)};
    padding: ${props.theme.size(1)};
    margin: ${props.theme.size(4)} 0 ${props.theme.size(4)};
  `
);

export const HeaderContainer = styled.div(
  props => css`
    padding: ${props.theme.size(2)} ${props.theme.size(1)};
    display: flex;
    align-items: center;
    gap: ${props.theme.size(8)};
  `
);

export const DateContainer = styled.div(
  props => css`
    padding: ${props.theme.size(1)} 0;
    display: flex;
    align-items: center;
    gap: ${props.theme.size(4)};
  `
);

export const DateButton = styled.div(
  props => css`
    display: flex;
    padding: ${props.theme.size(0.75)};
    font-size: ${props.theme.size(8)};
    background-color: ${props.theme.colors.current.mainBg};
    box-shadow: none;
    color: ${props.theme.colors.white};
    border-radius: ${props.theme.border.radius.medium};
    cursor: pointer;
  `
);

export const DateLabel = styled.h1(
  props => css`
    padding: ${props.theme.size(1)};
    min-width: ${props.theme.size(80)};
    color: ${props.theme.colors.current.main};
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  `
);

export const DateNumber = styled.h1(
  props => css`
    padding: ${props.theme.size(1)};
    color: ${props.theme.colors.current.main};
    font-weight: bold;
  `
);
