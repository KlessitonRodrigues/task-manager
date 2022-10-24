import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: ${theme.getSize(1)} 0;
  position: relative;
`;

export const DaysContainer = styled.div`
  display: flex;
`;

export const TopLeft = styled.h6`
  position: absolute;
  top: -${theme.getSize(4)};
  left: ${theme.getSize(1)};
  color: ${theme.colors.dynamic().colorA['900'] + 'CC'};
`;
