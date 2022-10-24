import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: ${theme.getSize(4)};
`;

export const DaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${theme.getSize(3)};
`;
