import PropTypes from 'prop-types';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

const ProductConfiguratorSubOptionsButtonGroup = ({ onSelect, selectedOption, values }) => {
  const handleSelect = async (event, value) => {
    if (onSelect && typeof onSelect === 'function') {
      await onSelect(value);
    }
  };

  return (
    <ToggleButtonGroup
      onChange={handleSelect}
      value={selectedOption?.value ?? null}
      exclusive
      fullWidth
    >
      {values.map(value => (
        <ToggleButton key={value.value} value={value.value} size="small">
          <Typography variant="bodyMediumMedium">{value.label}</Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

ProductConfiguratorSubOptionsButtonGroup.propTypes = {
  onSelect: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  selectedOption: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  values: PropTypes.array,
};

ProductConfiguratorSubOptionsButtonGroup.defaultProps = {
  onSelect: undefined,
  selectedOption: undefined,
  values: [],
};

export default ProductConfiguratorSubOptionsButtonGroup;
