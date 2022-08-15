import { getShopData } from '@lib/afosto';
import NextError from 'next/error';
import PropTypes from 'prop-types';

const Error = ({ statusCode }) => <NextError statusCode={statusCode} />;

Error.getInitialProps = async ({ res, err, locale }) => {
  const errorCode = err ? err.statusCode : 404;
  const statusCode = res ? res.statusCode : errorCode;
  const shopData = await getShopData(locale);
  return { statusCode, shopData, locale };
};

Error.propTypes = {
  statusCode: PropTypes.number,
};

Error.defaultProps = {
  statusCode: undefined,
};

export default Error;
