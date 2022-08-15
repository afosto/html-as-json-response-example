import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import CaratWeightFilter from './components/CaratWeightFilter';
import MetalMaterialFilter from './components/MetalMaterialFilter';
import StoneMaterialFilter from './components/StoneMaterialFilter';
import StoneShapeFilter from './components/StoneShapeFilter';

const DesktopFilters = ({ filters }) => {
  const stoneMaterialFilter = filters['nl-stone-material'];
  const stoneShapeFilter = filters['nl-stone-shape'];
  const metalMaterialFilter = filters['nl-metal-material'];
  const caratWeightFilter = filters['karat-material'];

  return (
    <Box display="flex" gap={1.5} position="relative">
      {stoneMaterialFilter && <StoneMaterialFilter filter={stoneMaterialFilter} />}
      {stoneShapeFilter && <StoneShapeFilter filter={stoneShapeFilter} />}
      {metalMaterialFilter && <MetalMaterialFilter filter={metalMaterialFilter} />}
      {caratWeightFilter && <CaratWeightFilter filter={caratWeightFilter} />}
    </Box>
  );
};

DesktopFilters.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  filters: PropTypes.object,
};

DesktopFilters.defaultProps = {
  filters: {},
};

export default DesktopFilters;
