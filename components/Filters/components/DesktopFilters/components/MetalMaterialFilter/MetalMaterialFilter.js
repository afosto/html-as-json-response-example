import useFilterState from '@components/Filters/hooks/useFilterState';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Grid } from '@mui/material';
import AttributesColumn from '../AttributesColumn';
import Filter from '../Filter';
import chunkAttributes from '../../../../utils/chunkAttributes';
import getAttributes from '../../../../utils/getAttributes';
import translations from './translations';

const MetalMaterialFilter = ({ filter }) => {
  const intl = useIntl();
  const { handleClose, open, toggleOpen } = useFilterState();
  const { attributes = [] } = filter || {};
  const chunkedAttributes = chunkAttributes(getAttributes(attributes));

  return (
    <Filter
      description={intl.formatMessage(translations.filterDescription)}
      label={intl.formatMessage(translations.filterLabel)}
      open={open}
      onClick={toggleOpen}
      onClose={handleClose}
    >
      <Grid container spacing={4}>
        <AttributesColumn attributes={chunkedAttributes} onClick={handleClose} />
      </Grid>
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
