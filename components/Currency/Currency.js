import isDefined from '@utils/isDefined';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

const Currency = ({ currency, value }) => {
  const intl = useIntl();

  if (!isDefined(value) && !Number.isNaN(value)) {
    return '-';
  }

  return intl.formatNumber(parseInt(value, 10) / 100, { style: 'currency', currency });
};

Currency.propTypes = {
  currency: PropTypes.string,
  value: PropTypes.number,
};

Currency.defaultProps = {
  currency: 'EUR',
  value: undefined,
};

export default Currency;
