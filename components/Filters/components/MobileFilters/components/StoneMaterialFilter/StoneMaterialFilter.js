import { List, ListSubheader } from '@mui/material';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import getAttributes from '../../../../utils/getAttributes';
import filterAttributesByLabels from '../../../../utils/filterAttributesByLabels';
import Filter from '../Filter';
import FilterListItem from '../FilterListItem';
import translations from './translations';

const StoneMaterialFilter = ({ filter }) => {
  const intl = useIntl();
  const { attributes = [] } = filter || {};
  const diamondAttributes = getAttributes(attributes, 'diamant_');
  const preciousGemstonesAttributes = getAttributes(attributes, 'edelsteen_');
  const semiPreciousGemstonesAttributes = getAttributes(attributes, 'half_');
  const pearlAttributes = getAttributes(attributes, 'pearl_');
  const flatAttributes = getAttributes(attributes, 'flat_');
  const otherAttributes = filterAttributesByLabels(attributes, [
    'diamant_',
    'edelsteen_',
    'half_',
    'pearl_',
    'flat_',
  ]);

  return (
    <Filter title={intl.formatMessage(translations.filterLabel)}>
      <List disablePadding>
        {diamondAttributes.length > 0 && (
          <>
            <ListSubheader sx={{ fontWeight: 'bold' }}>
              <FormattedMessage {...translations.attributesDiamondTitle} />
            </ListSubheader>
            {diamondAttributes.map(attribute => (
              <FilterListItem key={attribute.key} attribute={attribute} />
            ))}
          </>
        )}
        {preciousGemstonesAttributes.length > 0 && (
          <>
            <ListSubheader sx={{ fontWeight: 'bold' }}>
              <FormattedMessage {...translations.attributesPreciousGemstonesTitle} />
            </ListSubheader>
            {preciousGemstonesAttributes.map(attribute => (
              <FilterListItem key={attribute.key} attribute={attribute} />
            ))}
          </>
        )}
        {semiPreciousGemstonesAttributes.length > 0 && (
          <>
            <ListSubheader sx={{ fontWeight: 'bold' }}>
              <FormattedMessage {...translations.attributesSemiPreciousGemstonesTitle} />
            </ListSubheader>
            {semiPreciousGemstonesAttributes.map(attribute => (
              <FilterListItem key={attribute.key} attribute={attribute} />
            ))}
          </>
        )}
        {pearlAttributes.length > 0 && (
          <>
            <ListSubheader sx={{ fontWeight: 'bold' }}>
              <FormattedMessage {...translations.attributesPearlsTitle} />
            </ListSubheader>
            {pearlAttributes.map(attribute => (
              <FilterListItem key={attribute.key} attribute={attribute} />
            ))}
          </>
        )}
        {flatAttributes.length > 0 && (
          <>
            <ListSubheader sx={{ fontWeight: 'bold' }}>
              <FormattedMessage {...translations.attributesFlatTitle} />
            </ListSubheader>
            {flatAttributes.map(attribute => (
              <FilterListItem key={attribute.key} attribute={attribute} />
            ))}
          </>
        )}
        {otherAttributes.length > 0 && (
          <>
            <ListSubheader sx={{ fontWeight: 'bold' }}>
              <FormattedMessage {...translations.attributesOtherTitle} />
            </ListSubheader>
            {otherAttributes.map(attribute => (
              <FilterListItem key={attribute.key} attribute={attribute} />
            ))}
          </>
        )}
      </List>
    </Filter>
  );
};

StoneMaterialFilter.propTypes = {
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

export default StoneMaterialFilter;
