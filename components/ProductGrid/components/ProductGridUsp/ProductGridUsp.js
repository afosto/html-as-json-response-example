import Diamond from '@icons/Diamond';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import * as Styled from './ProductGridUsp.styles';

const ProductGridUsp = ({ usp }) => (
  <Styled.Container>
    <Diamond />
    <Typography variant="bodyMedium">{usp}</Typography>
  </Styled.Container>
);

ProductGridUsp.propTypes = {
  usp: PropTypes.string.isRequired,
};

export default ProductGridUsp;
