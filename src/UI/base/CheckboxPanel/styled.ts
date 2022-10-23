import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.getSize(4)};
  padding: ${theme.getSize(2)} 0;
`;

export const Checkbox = styled.div<{ checked?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.getSize(2)};
  font-size: ${theme.fontSize['h5']};
  color: ${p => (p.checked ? theme.colors.dynamic().colorA['500'] : theme.colors.dynamic().text1)};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.dynamic().colorA['700']};
  }
`;
