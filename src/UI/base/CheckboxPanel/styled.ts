import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: ${theme.getSize(1)} 0;
`;

export const Checkbox = styled.div<{ checked?: boolean; iconSize?: string }>`
  display: flex;
  align-items: center;
  gap: ${theme.getSize(2)};
  font-size: ${theme.fontSize['h5']};
  color: ${p => (p.checked ? theme.colors.dynamic().colorA['500'] : theme.colors.dynamic().text2)};
  cursor: pointer;
  text-transform: capitalize;

  & > svg {
    font-size: ${p => p.iconSize || '1rem'};
  }

  &:hover {
    color: ${theme.colors.dynamic().colorA['500']};
  }
`;

export const Label = styled.div`
  padding: ${theme.getSize(2)} 0;
  font-size: ${theme.fontSize['h5']};
  color: ${theme.colors.dynamic().text3};
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.getSize(4)};
`;
