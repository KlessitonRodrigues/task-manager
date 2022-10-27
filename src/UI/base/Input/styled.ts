import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  margin: ${theme.getSize(4)} 0 ${theme.getSize(0)};
`;

export const Label = styled.h6`
  padding: ${theme.getSize(1)} 0;
`;

export const InputField = styled.input`
  width: 100%;
  padding: ${theme.getSize(1)} ${theme.getSize(2)};
  background-color: transparent;
  border: transparent;
  border-bottom: 1px solid ${theme.colors.dynamic().colorA['500']};
  border-left: 1px solid ${theme.colors.dynamic().colorA['500']};
  border-bottom-left-radius: 6px;
  color: ${theme.colors.dynamic().colorA['900']};
  font-size: ${theme.fontSize.h4};
`;
