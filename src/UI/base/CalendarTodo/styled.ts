import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: ${theme.getSize(2)};
  margin: ${theme.getSize(2)} 0;
  border: 2px solid ${theme.colors.gray + '44'};
  border-left: 5px solid ${theme.colors.gray + '99'};
  border-radius: ${theme.border.radius['1']};
  cursor: pointer;

  &:hover {
    border-top: 2px solid ${theme.colors.gray};
    border-bottom: 2px solid ${theme.colors.gray};
    border-right: 2px solid ${theme.colors.gray};
  }
`;
