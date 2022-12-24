import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  margin: ${theme.getSize(2)} 0 ${theme.getSize(4)};
`;

export const Label = styled.h5`
  margin: ${theme.getSize(2)} 0;
  border-bottom: 2px solid ${theme.colors.gray + '33'};
  padding: ${theme.getSize(1)} 0;
  color: ${theme.colors.fromTheme().text3};
`;

export const Content = styled.div``;
