import { List } from '@mui/material';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Filter from '../Filter';
import FilterListItem from '../FilterListItem';
import filterAttributesByLabels from '../../../../utils/filterAttributesByLabels';
import translations from './translations';

const CaratWeightFilter = ({ filter }) => {
  const intl = useIntl();
  const attributes = filterAttributesByLabels(filter.attributes, ['hidden', 'rainbow']);

  return (
    <Filter title={intl.formatMessage(translations.filterLabel)}>
      <List disablePadding>
        {attributes.map(attribute => (
          <FilterListItem key={attribute.key} attribute={attribute} />
        ))}
      </List>
    </Filter>
  );
};

CaratWeightFilter.propTypes = {
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

export default CaratWeightFilter;
