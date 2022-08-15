import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing()};
  grid-column: span 2;
  grid-row: span 1;
  align-items: center;
  justify-content: center;

  @media (min-width: ${props => props.theme.breakpoints.values.sm}px) and (max-width: ${props =>
      props.theme.breakpoints.values.md - 1}px) {
    grid-column: span 3;

    &:nth-of-type(1) {
      grid-row-start: 2;
    }

    &:nth-of-type(2) {
      grid-row-start: 5;
    }

    &:nth-of-type(3) {
      grid-row-start: 7;
    }

    &:nth-of-type(4) {
      grid-row-start: 9;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.values.md}px) {
    grid-column: span 4;
  }
`;
