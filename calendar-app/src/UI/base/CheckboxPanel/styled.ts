import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: ${theme.size(1)} 0;
`;

export const Checkbox = styled.div<{ checked?: boolean; iconSize?: string }>`
  display: flex;
  align-items: center;
  gap: ${theme.size(2)};
  font-size: ${theme.fontSize['h5']};
  color: ${p => (p.checked ? theme.colors.current().main : theme.colors.current().text2)};
  cursor: pointer;
  text-transform: capitalize;

  & > svg {
    font-size: ${p => p.iconSize || '1rem'};
  }

  &:hover {
    color: ${theme.colors.current().main}aa;
  }
`;

export const Label = styled.div<{ display?: boolean }>`
  padding: ${theme.size(2)} 0;
  font-size: ${theme.fontSize['h5']};
  color: ${theme.colors.current().text3};

  ${p => !p.display && 'display: none;'}
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.size(4)};
`;
