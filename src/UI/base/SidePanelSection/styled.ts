import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  margin: ${theme.size(2)} 0 ${theme.size(4)};
`;

export const Label = styled.h5`
  margin: ${theme.size(2)} 0;
  border-bottom: 2px solid ${theme.colors.gray + '33'};
  padding: ${theme.size(1)} 0;
  color: ${theme.colors.current().text3};
`;

export const Content = styled.div``;
