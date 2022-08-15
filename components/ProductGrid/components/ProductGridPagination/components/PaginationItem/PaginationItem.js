import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { PaginationItem as MuiPaginationItem } from '@mui/material';
import { useIntl } from 'react-intl';
import PaginationButton from '../PaginationButton';
import translations from './translations';

const PaginationItem = ({ href, item }) => {
  const intl = useIntl();

  if (item.type === 'previous') {
    return <PaginationButton href={href} label={intl.formatMessage(translations.previous)} />;
  }

  if (item.type === 'next') {
    return <PaginationButton href={href} label={intl.formatMessage(translations.next)} />;
  }

  return (
    <NextLink href={href} prefetch={false} passHref>
      <MuiPaginationItem {...item} component="a" />
    </NextLink>
  );
};

PaginationItem.propTypes = {
  href: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  item: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
};

PaginationItem.defaultProps = {
  href: undefined,
};

export default PaginationItem;
