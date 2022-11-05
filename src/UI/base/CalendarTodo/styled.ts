import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: ${theme.getSize(1, 2)};
  margin: ${theme.getSize(1)} 0;
  border: 1px solid ${theme.colors.gray + '44'};
  border-left: 5px solid ${theme.colors.gray + '99'};
  border-radius: ${theme.border.radius['1']};
  background-color: ${theme.colors.fromTheme().bg1};
  cursor: pointer;

  &:hover {
    border-top: 1px solid ${theme.colors.gray};
    border-bottom: 1px solid ${theme.colors.gray};
    border-right: 1px solid ${theme.colors.gray};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Time = styled.h6`
  color: ${theme.colors.fromTheme().colorA['900']};
`;

export const Title = styled.h5`
  padding: ${theme.getSize(1)} 0;
  text-transform: capitalize;
`;

export const Tags = styled.div`
  padding: ${theme.getSize(2)};
`;
