import styled from 'styled-components';
import theme from '@styles/theme';

export const Container = styled.div<{ bg: string }>`
  background-color: ${props => props.bg || theme.colors.bg.light};
  padding: ${theme.getSize(2)};
  margin: ${theme.getSize(2)};
  border-radius: ${theme.border.radius['1']};
  border: 1px solid transparent;

  :hover {
    border: ${theme.border.type['1']};
  }
`;
