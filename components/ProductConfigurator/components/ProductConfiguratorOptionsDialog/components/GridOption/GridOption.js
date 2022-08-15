import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Image from 'next/image';
import Currency from '@components/Currency';
import { FormattedMessage } from 'react-intl';
import translations from './translations';

const GridOption = ({ disabled, isLoading, option, onSelect }) => (
  <Grid item xs={3}>
    <Image src={option.img} layout="responsive" width={400} height={400} />
    <Typography component="div" variant="bodyMedium" color="grayGreen.600" textAlign="center">
      {option.label}
    </Typography>
    <Typography component="div" variant="bodyMediumMedium" textAlign="center" sx={{ mb: 1 }}>
      <Currency value={option.sales_price} />
    </Typography>
    <LoadingButton
      onClick={onSelect}
      variant="contained"
      size="small"
      disabled={disabled || !option.available}
      loading={isLoading}
      fullWidth
    >
      <FormattedMessage {...translations[option.available ? 'select' : 'unavailable']} />
    </LoadingButton>
  </Grid>
);

GridOption.propTypes = {
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  option: PropTypes.object.isRequired,
};

GridOption.defaultProps = {
  disabled: false,
  isLoading: false,
};

export default GridOption;
