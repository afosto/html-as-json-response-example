import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import GridOption from '../GridOption';

const OptionsGrid = ({ isLoading, options, onSelect, selectedOption }) => (
  <Grid container spacing={2}>
    {options.map(option => {
      const isSelected = selectedOption?.value === option.value;

      return (
        <GridOption
          key={option.value}
          option={option}
          onSelect={onSelect(option)}
          disabled={isLoading && !isSelected}
          isLoading={isLoading}
        />
      );
    })}
  </Grid>
);

OptionsGrid.propTypes = {
  isLoading: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array,
  // eslint-disable-next-line react/forbid-prop-types
  selectedOption: PropTypes.object,
};

OptionsGrid.defaultProps = {
  isLoading: false,
  options: [],
  selectedOption: undefined,
};

export default OptionsGrid;
