import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding-left: ${theme.getSize(14)};
`;

export const Title = styled.h1``;

export const Collapse = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: inline-flex;
  align-items: center;
  background-color: ${theme.colors.colorA['700']};
  border-radius: 0 0 ${theme.border.radius['3']} 0;
  color: ${theme.colors.white};
  padding: ${theme.getSize(2)};

  &:hover {
    width: 100%;
    border-radius: 0;
    & .expand {
      visibility: visible;
      width: auto;
      height: auto;
      opacity: 1;
      padding: 0 ${theme.getSize(2)};
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
