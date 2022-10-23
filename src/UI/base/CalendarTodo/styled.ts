import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: ${theme.getSize(2)};
  margin: ${theme.getSize(2)} 0;
  border: 2px solid ${theme.colors.green + '88'};
  border-radius: ${theme.border.radius['1']};

  &:hover {
    border: 2px solid ${theme.colors.green};
  }
`;
