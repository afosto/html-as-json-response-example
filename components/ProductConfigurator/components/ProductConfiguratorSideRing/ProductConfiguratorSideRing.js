import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ProductConfiguratorOptionsCollapse from '../ProductConfiguratorOptionsCollapse';
import ProductConfiguratorOptionsDialog from '../ProductConfiguratorOptionsDialog';
import { SUB_OPTIONS_TYPE_MAPPING } from './constants';

const ProductConfiguratorSideRing = ({
  active,
  onChangeConfiguration,
  onCheckAvailability,
  onClick,
  option,
}) => {
  const [showCollapsedOption, setShowCollapsedOption] = useState(false);

  const formattedOption = useMemo(() => {
    const values = option.values.map(optionValue => {
      const valueOptions = (optionValue.options || []).map(subOptionValue => ({
        ...subOptionValue,
        type: SUB_OPTIONS_TYPE_MAPPING[subOptionValue?.option] || 'grid',
      }));

      return { ...optionValue, options: valueOptions };
    });
    return { ...option, values };
  }, [option]);

  const handleDialogExited = () => {
    setShowCollapsedOption(true);
  };

  return (
    <>
      {!showCollapsedOption && (
        <ProductConfiguratorOptionsDialog
          active={active}
          option={formattedOption}
          onClick={onClick}
          onChangeConfiguration={onChangeConfiguration}
          onCheckAvailability={onCheckAvailability}
          onDialogExited={handleDialogExited}
        />
      )}
      {showCollapsedOption && (
        <ProductConfiguratorOptionsCollapse
          active={active}
          onChangeConfiguration={onChangeConfiguration}
          onCheckAvailability={onCheckAvailability}
          option={formattedOption}
          onClick={onClick}
          hideOptionValues
        />
      )}
    </>
  );
};

ProductConfiguratorSideRing.propTypes = {
  active: PropTypes.bool,
  onChangeConfiguration: PropTypes.func,
  onCheckAvailability: PropTypes.func,
  onClick: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  option: PropTypes.object.isRequired,
};

ProductConfiguratorSideRing.defaultProps = {
  active: false,
  onChangeConfiguration: undefined,
  onCheckAvailability: undefined,
  onClick: undefined,
};

export default ProductConfiguratorSideRing;
