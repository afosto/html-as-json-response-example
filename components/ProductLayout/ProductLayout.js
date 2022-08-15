import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import * as Styled from './ProductLayout.styles';

const ProductLayout = ({ children }) => (
  <Container sx={{ mb: 10 }}>
    <Styled.Wrapper>{children}</Styled.Wrapper>
  </Container>
);

ProductLayout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

export default ProductLayout;
