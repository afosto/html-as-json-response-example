import ActiveFilters from '@components/ActiveFilters';
import DrawerHeader from '@components/DrawerHeader';
import { Button, Drawer, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import CaratWeightFilter from './components/CaratWeightFilter';
import MetalMaterialFilter from './components/MetalMaterialFilter';
import StoneMaterialFilter from './components/StoneMaterialFilter';
import StoneShapeFilter from './components/StoneShapeFilter';
import * as Styled from './MobileFilters.styles';
import translations from './translations';

const MobileFilters = ({ activeFilterOptions, filters }) => {
  const intl = useIntl();
  const [open, setOpen] = useState(false);
  const stoneMaterialFilter = filters['nl-stone-material'];
  const stoneShapeFilter = filters['nl-stone-shape'];
  const metalMaterialFilter = filters['nl-metal-material'];
  const caratWeightFilter = filters['karat-material'];

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="grayGreen"
        size="small"
        onClick={handleClick}
        sx={{ justifyContent: 'flex-start' }}
        fullWidth
      >
        <Typography variant="buttonSmall" fontWeight="bold">
          <FormattedMessage {...translations.filtersPlaceholder} />
        </Typography>
      </Button>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 'calc(100% - 55px)',
            maxWidth: 320,
          },
        }}
      >
        <DrawerHeader
          onClose={handleClose}
          title={intl.formatMessage(translations.filtersPlaceholder)}
        />
        {activeFilterOptions.length > 0 && (
          <Styled.ActiveFiltersWrapper>
            <ActiveFilters activeFilterOptions={activeFilterOptions} />
          </Styled.ActiveFiltersWrapper>
        )}
        {stoneMaterialFilter && <StoneMaterialFilter filter={stoneMaterialFilter} />}
        {stoneShapeFilter && <StoneShapeFilter filter={stoneShapeFilter} />}
        {metalMaterialFilter && <MetalMaterialFilter filter={metalMaterialFilter} />}
        {caratWeightFilter && <CaratWeightFilter filter={caratWeightFilter} />}
      </Drawer>
    </>
  );
};

MobileFilters.propTypes = {
  activeFilterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
  // eslint-disable-next-line react/forbid-prop-types
  filters: PropTypes.object,
};

MobileFilters.defaultProps = {
  activeFilterOptions: [],
  filters: {},
};

export default MobileFilters;
