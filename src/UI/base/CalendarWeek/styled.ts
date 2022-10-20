import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: ${theme.getSize(4)};
  border-top: 1px solid ${theme.colors.colorA['300']};
  border-radius: ${theme.border.radius['1']};
  margin: ${theme.getSize(8)} 0;
  position: relative;
`;

export const DaysContainer = styled.div`
  display: flex;
`;

export const TopLeft = styled.h4`
  position: absolute;
  top: -${theme.getSize(6)};
  left: 0;
  color: ${theme.colors.colorA['900'] + '88'};
`;
