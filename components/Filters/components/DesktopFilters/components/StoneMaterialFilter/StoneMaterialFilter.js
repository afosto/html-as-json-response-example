import useFilterState from '@components/Filters/hooks/useFilterState';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AttributesColumn from '../AttributesColumn';
import Filter from '../Filter';
import chunkAttributes from '../../../../utils/chunkAttributes';
import getAttributes from '../../../../utils/getAttributes';
import filterAttributesByLabels from '../../../../utils/filterAttributesByLabels';
import translations from './translations';

const StoneMaterialFilter = ({ filter }) => {
  const intl = useIntl();
  const { handleClose, open, toggleOpen } = useFilterState();
  const { attributes = [] } = filter || {};
  const diamondAttributes = chunkAttributes(getAttributes(attributes, 'diamant_'));
  const preciousGemstonesAttributes = chunkAttributes(getAttributes(attributes, 'edelsteen_'));
  const semiPreciousGemstonesAttributes = chunkAttributes(getAttributes(attributes, 'half_'));
  const pearlAttributes = chunkAttributes(getAttributes(attributes, 'pearl_'));
  const flatAttributes = chunkAttributes(getAttributes(attributes, 'flat_'));
  const otherAttributes = chunkAttributes(
    filterAttributesByLabels(attributes, ['diamant_', 'edelsteen_', 'half_', 'pearl_', 'flat_']),
  );

  return (
    <Filter
      description={intl.formatMessage(translations.filterDescription)}
      label={intl.formatMessage(translations.filterLabel)}
      open={open}
      onClick={toggleOpen}
      onClose={handleClose}
    >
      <Grid container spacing={4}>
        {diamondAttributes.length > 0 && (
          <AttributesColumn
            title={intl.formatMessage(translations.attributesDiamondTitle)}
            attributes={diamondAttributes}
            onClick={handleClose}
          />
        )}
        {preciousGemstonesAttributes.length > 0 && (
          <AttributesColumn
            title={intl.formatMessage(translations.attributesPreciousGemstonesTitle)}
            attributes={preciousGemstonesAttributes}
            onClick={handleClose}
          />
        )}
        {semiPreciousGemstonesAttributes.length > 0 && (
          <AttributesColumn
            title={intl.formatMessage(translations.attributesSemiPreciousGemstonesTitle)}
            attributes={semiPreciousGemstonesAttributes}
            onClick={handleClose}
          />
        )}
        {pearlAttributes.length > 0 && (
          <AttributesColumn
            title={intl.formatMessage(translations.attributesPearlsTitle)}
            attributes={pearlAttributes}
            onClick={handleClose}
          />
        )}
        {flatAttributes.length > 0 && (
          <AttributesColumn
            title={intl.formatMessage(translations.attributesFlatTitle)}
            attributes={flatAttributes}
            onClick={handleClose}
          />
        )}
        {otherAttributes.length > 0 && (
          <AttributesColumn
            title={intl.formatMessage(translations.attributesOtherTitle)}
            attributes={otherAttributes}
            onClick={handleClose}
          />
        )}
      </Grid>
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
