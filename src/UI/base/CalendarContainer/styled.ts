import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: ${theme.size(0, 4)};
`;

export const DaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${theme.size(3)};
`;
