import styled, { css } from 'styled-components';

export const Container = styled.div<{ week: number }>(
  props => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: ${props.theme.size(4)};
    padding-right: ${props.theme.size(4)};
    gap: ${props.theme.size(3)};

    ${WeekContainer} {
      :nth-child(${props.week + 1}) {
        height: 100%;
        ::before {
          height: 99%;
        }
      }
    }
  `
);

export const WeekContainer = styled.div(
  props => css`
    position: relative;
    cursor: pointer;
    transition: 0.5s height;
    height: ${props.theme.size(12)};

    ::before {
      content: '';
      padding: ${props.theme.size(1)};
      border-left: 6px solid ${props.theme.colors.current.main}55;
      position: absolute;
      right: -${props.theme.size(4)};
      top: 0;
      height: 95%;
    }

    :hover::before {
      border-left-color: ${props.theme.colors.current.main};
    }
  `
);

export const WeekContent = styled.div(
  () => css`
    display: flex;
    overflow: hidden;
    height: 100%;
  `
);

export const DayContainer = styled.div(
  props => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 ${props.theme.size(1)};
    border-radius: ${props.theme.border.radius.small};
    overflow: hidden;
    transition: 0.5s padding;
  `
);

export const DayHeader = styled.div<{ outOfMonth?: boolean }>(
  props => css`
    padding: ${props.theme.size(2)};
    margin-bottom: ${props.theme.size(4)};
    border-radius: ${props.theme.border.radius.small};
    background-color: ${props.theme.colors.current.mainBg};
    color: ${props.theme.colors.white};
    font-weight: bold;
    user-select: none;

    :hover {
      background-color: ${props.theme.colors.current.mainHover};
    }

    ${props.outOfMonth && `background-color: ${props.theme.colors.gray}99;`}
  `
);

export const DayContent = styled.div(
  props => css`
    background-color: ${props.theme.colors.current.bg2};
    border-radius: ${props.theme.border.radius.medium};
    position: relative;
    height: 100%;
  `
);
