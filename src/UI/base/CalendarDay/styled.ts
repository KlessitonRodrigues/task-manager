import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: ${theme.getSize(2)};
  margin: 0 ${theme.getSize(2)};
  border: 1px solid ${theme.colors.colorA['500']};
  border-radius: ${theme.border.radius['1']};
  //background-color: ${theme.colors.colorA['50']};
`;
