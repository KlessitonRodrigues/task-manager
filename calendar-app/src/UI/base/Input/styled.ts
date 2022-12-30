import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  margin: ${theme.size(4)} 0 ${theme.size(0)};
`;

export const Label = styled.h6`
  padding: ${theme.size(1)} 0;
`;

export const InputField = styled.input`
  width: 100%;
  padding: ${theme.size(1)} ${theme.size(2)};
  background-color: transparent;
  border: transparent;
  border-bottom: 1px solid ${theme.colors.current().main + '99'};
  border-left: 1px solid ${theme.colors.current().main + '99'};
  border-bottom-left-radius: 6px;
  color: ${theme.colors.current().main};
  font-size: ${theme.fontSize.h4};
`;
