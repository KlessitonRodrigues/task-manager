import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div<{ bg?: string; border?: string }>`
  border-radius: ${theme.border.radius.full};
  width: ${theme.size(8)};
  height: ${theme.size(8)};

  border: 3px solid ${p => p.border || 'transparent'};
  background-color: ${p => p.bg || 'transparent'};
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
`;
