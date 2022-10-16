import styled from 'styled-components';
import theme from '@styles/theme';

export const Container = styled.div<{ color?: string; size: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => theme.getSize(props.size || 7)};
`;
