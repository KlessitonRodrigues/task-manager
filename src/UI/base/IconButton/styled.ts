import theme from 'src/styles/theme';
import styled from 'styled-components';

export const Container = styled.button<{
  p?: string;
  variant?: 'solid' | 'outiline';
}>`
  margin: 0;
  min-width: ${theme.size(10)};
  min-height: ${theme.size(10)};
  border-radius: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.size(8)};
  color: ${theme.colors.white};

  svg {
    fill: ${theme.colors.white}CC;
  }

  &:hover svg {
    fill: ${theme.colors.white};
  }
`;
