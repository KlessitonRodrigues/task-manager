import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div<{ size?: string }>`
  display: inline-flex;
  flex-direction: column;
  padding: ${theme.size(1)} 0;
  padding-right: ${theme.size(4)};

  width: ${p => p.size || 'auto'};
`;

export const Label = styled.span<{ show?: boolean }>`
  color: ${theme.colors.current().text3};
  padding-right: ${theme.size(2)};
  padding-bottom: ${theme.size(1)};
  font-size: ${theme.fontSize.h6};

  display: ${p => (p.show ? 'block' : 'none')};
`;

export const Value = styled.span<{ show?: boolean; color?: 'main' | 'none' }>`
  color: ${theme.colors.current().main};

  display: ${p => (p.show ? 'block' : 'none')};
  color: ${p => p.color === 'none' && 'unset'};
`;
