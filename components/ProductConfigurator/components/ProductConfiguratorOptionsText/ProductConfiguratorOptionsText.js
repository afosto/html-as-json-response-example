import { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Box } from '@mui/material';
import TextField from '@components/TextField';
import ProductConfiguratorListItem from '../ProductConfiguratorListItem';
import translations from './translations';

const ProductConfiguratorOptionsText = ({ active, onChangeConfiguration, onClick, option }) => {
  const intl = useIntl();
  const [inputValues, setInputValues] = useState({});
  const [firstValue] = Object.values(inputValues);

  const handleChangeInput = optionValue => event => {
    const value = event.target.value || '';
    setInputValues({ ...inputValues, [optionValue.value]: value });
  };

  const handleBlur = async event => {
    const value = event.target.value || '';

    const selected = {
      option: option.option,
      option_label: option.label,
      value,
      label: value,
      selected: [],
    };

    if (onChangeConfiguration && typeof onChangeConfiguration === 'function') {
      await onChangeConfiguration([selected], { skipApi: true });
    }
  };

  return (
    <ProductConfiguratorListItem
      active={active}
      description={firstValue}
      onClick={onClick}
      option={option}
      collapse
    >
      <Box p={2}>
        {option.values.map(value => (
          <TextField
            key={value.value}
            label={intl.formatMessage(translations.label)}
            helperText={value.label}
            onKeyUp={handleChangeInput(value)}
            onBlur={handleBlur}
            inputProps={{
              maxLength: value.value,
            }}
            size="small"
            fullWidth
          />
        ))}
      </Box>
    </ProductConfiguratorListItem>
  );
};

ProductConfiguratorOptionsText.propTypes = {
  active: PropTypes.bool,
  onChangeConfiguration: PropTypes.func,
  onClick: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  option: PropTypes.object.isRequired,
};

ProductConfiguratorOptionsText.defaultProps = {
  active: false,
  onChangeConfiguration: undefined,
  onClick: undefined,
};

export default ProductConfiguratorOptionsText;
