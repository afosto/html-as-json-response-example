import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import DesktopFilters from './components/DesktopFilters';
import MobileFilters from './components/MobileFilters';

const Filters = ({ activeFilterOptions, filters }) => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  if (isMobile) {
    return <MobileFilters activeFilterOptions={activeFilterOptions} filters={filters} />;
  }

  return <DesktopFilters filters={filters} />;
};

Filters.propTypes = {
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

Filters.defaultProps = {
  activeFilterOptions: [],
  filters: {},
};

export default Filters;
