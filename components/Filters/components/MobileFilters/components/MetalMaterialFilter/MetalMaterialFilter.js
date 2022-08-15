import { List } from '@mui/material';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Filter from '../Filter';
import FilterListItem from '../FilterListItem';
import translations from './translations';

const MetalMaterialFilter = ({ filter }) => {
  const intl = useIntl();

  return (
    <Filter title={intl.formatMessage(translations.filterLabel)}>
      <List disablePadding>
        {filter.attributes.map(attribute => (
          <FilterListItem key={attribute.key} attribute={attribute} />
        ))}
      </List>
    </Filter>
  );
};

MetalMaterialFilter.propTypes = {
  filter: PropTypes.shape({
    attributes: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.string,
        link: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default MetalMaterialFilter;
