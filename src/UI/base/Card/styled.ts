import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div<{ bg: string }>`
  background-color: ${props => props.bg || theme.colors.fromTheme().bg1};
  padding: ${theme.getSize(2)};
  margin: ${theme.getSize(2)};
  border-radius: ${theme.border.radius['1']};
  border: 1px solid transparent;

  :hover {
    border: ${theme.border.type['1']};
  }
`;
