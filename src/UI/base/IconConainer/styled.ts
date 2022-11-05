import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div<{ color?: string; size: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => theme.getSize(props.size || 7)};
`;
