import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const ProductGrid = styled.div`
  display: grid;
  margin-top: ${props => props.theme.spacing(2.5)};
  grid-template-columns: repeat(2, 1fr);
  row-gap: 16px;

  @media (max-width: ${props => props.theme.breakpoints.values.md - 1}px) and (min-width: ${props =>
      props.theme.breakpoints.values.sm}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default ProductGrid;
