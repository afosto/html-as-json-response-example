import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Box, Typography } from '@mui/material';
import Currency from '@components/Currency';
import TrustProductStickerSummary from '@components/TrustProductStickerSummary';
import translations from './translations';

const ProductInformation = ({ currency, name, regularPrice, salesPrice, shopId, sku }) => (
  <Box mb={3}>
    <Typography
      component="h1"
      variant="h5"
      dangerouslySetInnerHTML={{ __html: name }}
      sx={{ mb: 2 }}
    />
    <TrustProductStickerSummary sku={sku} shopId={shopId} />
    <Typography variant="bodyMedium" color="grayGreen.800" sx={{ mt: 3 }}>
      <FormattedMessage
        {...translations.regularPrice}
        values={{
          price: (
            <s>
              <Currency currency={currency} value={regularPrice} />
            </s>
          ),
        }}
      />
    </Typography>
    <Typography variant="bodyLarge" color="grayGreen.600" sx={{ mt: 1 }}>
      <FormattedMessage
        {...translations.salesPrice}
        values={{
          price: (
            <Typography
              variant="bodyLargeMedium"
              color="grayGreen.900"
              component="span"
              fontWeight={500}
            >
              <Currency currency={currency} value={salesPrice} />
            </Typography>
          ),
        }}
      />
    </Typography>
  </Box>
);

ProductInformation.propTypes = {
  currency: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  regularPrice: PropTypes.number,
  salesPrice: PropTypes.number,
  shopId: PropTypes.number,
  sku: PropTypes.string.isRequired,
};

ProductInformation.defaultProps = {
  regularPrice: undefined,
  salesPrice: undefined,
  shopId: undefined,
};

export default ProductInformation;
