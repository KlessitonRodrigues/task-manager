import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: ${theme.getSize(2)};
  margin: ${theme.getSize(2)} 0;
  border: 1px solid ${theme.colors.green + 'AA'};
  border-radius: ${theme.border.radius['1']};
`;
