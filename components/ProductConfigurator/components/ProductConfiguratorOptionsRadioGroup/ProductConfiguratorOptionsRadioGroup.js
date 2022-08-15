import useGetLatest from '@hooks/useGetLatest';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import ProductConfiguratorListItem from '../ProductConfiguratorListItem';

const ProductConfiguratorOptionsRadioGroup = ({
  active,
  onChangeConfiguration,
  onClick,
  option,
}) => {
  const [availableOptionValues, setAvailableOptionValues] = useState([]);
  const [selectedOptionValue, setSelectedOptionValue] = useState(null);
  const optionId = option?.id;
  const getLatestOption = useGetLatest(option);

  useEffect(() => {
    if (active) {
      const latestOption = getLatestOption();
      const defaultAvailableValues = latestOption.values.filter(value => value.available === true);
      const defaultSelectedOptionValue = defaultAvailableValues.find(
        value => latestOption.selected?.value === value.value,
      );

      setAvailableOptionValues(defaultAvailableValues);
      setSelectedOptionValue(defaultSelectedOptionValue);
    }
  }, [active, getLatestOption, optionId]);

  const handleSelectOption = async event => {
    try {
      const { value } = event.target || {};
      const selectedOption = availableOptionValues.find(optionValue => optionValue.value === value);

      setSelectedOptionValue(selectedOption);

      const selected = {
        option: option.option,
        option_label: option.label,
        value: selectedOption.value,
        label: selectedOption.label,
        selected: [],
      };

      if (onChangeConfiguration && typeof onChangeConfiguration === 'function') {
        await onChangeConfiguration([selected]);
      }
    } catch (error) {
      // TODO: Do something with error.
    }
  };

  return (
    <ProductConfiguratorListItem active={active} onClick={onClick} option={option} collapse>
      <Box p={2}>
        <FormControl size="small">
          <RadioGroup
            value={selectedOptionValue?.value ?? null}
            name={option.option}
            onChange={handleSelectOption}
          >
            {availableOptionValues.map(optionValue => (
              <FormControlLabel
                key={optionValue.value}
                value={optionValue.value}
                control={<Radio size="small" />}
                label={optionValue.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </ProductConfiguratorListItem>
  );
};

ProductConfiguratorOptionsRadioGroup.propTypes = {
  active: PropTypes.bool,
  onChangeConfiguration: PropTypes.func,
  onClick: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  option: PropTypes.object.isRequired,
};

ProductConfiguratorOptionsRadioGroup.defaultProps = {
  active: false,
  onClick: undefined,
  onChangeConfiguration: undefined,
};

export default ProductConfiguratorOptionsRadioGroup;
