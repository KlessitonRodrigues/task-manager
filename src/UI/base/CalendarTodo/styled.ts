import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: ${theme.size(1, 2)};
  margin: ${theme.size(1)} 0;
  border: 1px solid ${theme.colors.gray + '44'};
  border-left: 5px solid ${theme.colors.gray + '99'};
  border-radius: ${theme.border.radius['1']};
  background-color: ${theme.colors.current().bg1};
  cursor: pointer;

  &:hover {
    border-top: 1px solid ${theme.colors.gray + 'AA'};
    border-bottom: 1px solid ${theme.colors.gray + 'AA'};
    border-right: 1px solid ${theme.colors.gray + 'AA'};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Time = styled.h6`
  color: ${theme.colors.current().main};
`;

export const Title = styled.h5`
  padding: ${theme.size(1)} 0;
  text-transform: capitalize;
`;

export const Tags = styled.div`
  padding: ${theme.size(2)};
`;
