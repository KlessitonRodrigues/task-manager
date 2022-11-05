import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: ${theme.getSize(2)} 0;
  margin: 0 ${theme.getSize(1)};
  border-radius: ${theme.border.radius['1']};
  overflow: hidden;
`;

export const Header = styled.div<{ outOfMonth?: boolean }>`
  padding: ${theme.getSize(2)};
  margin-bottom: ${theme.getSize(4)};
  border-radius: ${theme.border.radius['1']};
  color: ${theme.colors.white};
  background-color: ${theme.colors.fromTheme().colorA['700']};
  box-shadow: ${theme.shadow['2']};
  font-weight: bold;

  ${p => p.outOfMonth && `background-color: ${theme.colors.gray + '99'};`}
`;

export const Content = styled.div`
  background-color: ${theme.colors.gray + '0D'};
  border-radius: ${theme.border.radius['1']};
  padding: 0 ${theme.getSize(1)};
  height: 100%;
`;
