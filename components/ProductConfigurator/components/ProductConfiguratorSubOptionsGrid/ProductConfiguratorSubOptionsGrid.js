import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';
import { Typography } from '@mui/material';
import * as Styled from './ProductConfiguratorSubOptionsGrid.styles';

const ProductConfiguratorSubOptionsGrid = ({ onSelect, selectedOption, values }) => {
  const handleSelect = optionValue => async () => {
    if (onSelect && typeof onSelect === 'function') {
      await onSelect(optionValue);
    }
  };

  return (
    <Styled.OptionsContainer>
      {values.map(optionValue => (
        <Styled.OptionButton
          key={optionValue.value}
          className={clsx({ selected: selectedOption?.value === optionValue.value })}
          onClick={handleSelect(optionValue)}
        >
          {optionValue.img && <Image src={optionValue.img} height={30} width={30} />}
          <Typography component="div" variant="bodySmall" textAlign="center" mt={1} color="black">
            {optionValue.label}
          </Typography>
        </Styled.OptionButton>
      ))}
    </Styled.OptionsContainer>
  );
};

ProductConfiguratorSubOptionsGrid.propTypes = {
  onSelect: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  selectedOption: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  values: PropTypes.array,
};

ProductConfiguratorSubOptionsGrid.defaultProps = {
  onSelect: undefined,
  selectedOption: undefined,
  values: [],
};

export default ProductConfiguratorSubOptionsGrid;
