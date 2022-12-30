import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${theme.size(6)};
  padding-left: ${theme.size(16)};
  background-color: ${theme.colors.current().mainBg};
`;

export const Title = styled.h1``;

export const Collapse = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: inline-flex;
  align-items: center;
  background-color: ${theme.colors.current().main};
  border-radius: 0 0 ${theme.border.radius['3']} 0;
  color: ${theme.colors.white};
  padding: ${theme.size(2)};

  &:hover {
    width: 100%;
    border-radius: 0;
    & .expand {
      visibility: visible;
      width: auto;
      height: auto;
      opacity: 1;
      padding: 0 ${theme.size(2)};
    }
  }
`;

export const Show = styled.div`
  &:hover {
    border-radius: 0;
  }
`;

export const Expand = styled.div`
  visibility: hidden;
  width: 0;
  height: 0;
  opacity: 0;
`;

export const RightButtons = styled.div`
  display: flex;
  gap: ${theme.size(2)};
  padding: ${theme.size(2)};
`;