import { useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Card, CardHeader, Divider, List } from '@mui/material';
import AvailabilityDialog from './components/AvailabilityDialog';
import { EXCLUDE_CONFIGURATOR_OPTIONS, OPTION_TYPE_COMPONENTS_MAPPING } from './constants';
import translations from './translations';

const ProductConfigurator = ({
  configuration,
  configurationIncompatibleMessage,
  isFetchingConfiguration,
  onChangeConfiguration,
}) => {
  const intl = useIntl();
  const [showAvailabilityDialog, setShowAvailabilityDialog] = useState(false);
  const [availabilityDialogShown, setAvailabilityDialogShown] = useState(false);
  const availabilityPromiseRef = useRef(null);

  const filteredOptions = (configuration?.options || []).filter(option => {
    if (EXCLUDE_CONFIGURATOR_OPTIONS.includes(option.option)) {
      return false;
    }

    if (['engraving'].includes(option.option)) {
      return option.values.length > 0;
    }

    return option.values.length > 1;
  });
  const availableOptions = filteredOptions.map((option, index) => ({
    ...option,
    lastOption: index + 1 === filteredOptions.length,
  }));
  const openOption = availableOptions.find(option => option.is_open === true);
  const [activeOption, setActiveOption] = useState(openOption);

  useEffect(() => {
    setActiveOption(openOption);
  }, [openOption]);

  const handleClick = option => () => {
    if (activeOption?.option !== option.option) {
      setActiveOption(option);
    } else {
      setActiveOption(null);
    }
  };

  const handleCheckAvailability = async option => {
    try {
      const { available } = option || {};

      if (!available && !availabilityDialogShown) {
        setShowAvailabilityDialog(true);
        return new Promise(resolve => {
          availabilityPromiseRef.current = { resolve };
        });
      }

      return Promise.resolve(true);
    } catch (error) {
      return Promise.resolve(false);
    }
  };

  const handleCloseAvailabilityDialog = () => {
    if (availabilityPromiseRef.current) {
      availabilityPromiseRef.current.resolve(false);
    }

    setAvailabilityDialogShown(true);
    setShowAvailabilityDialog(false);
  };

  const handleConfirmAvailabilityDialog = () => {
    if (availabilityPromiseRef.current) {
      availabilityPromiseRef.current.resolve(true);
    }

    setAvailabilityDialogShown(true);
    setShowAvailabilityDialog(false);
  };

  return (
    <>
      <Card elevation={1} sx={{ mb: 3 }}>
        <CardHeader
          title={intl.formatMessage(translations.title)}
          titleTypographyProps={{ sx: { fontWeight: 'normal', textAlign: 'center' } }}
        />
        <Divider />
        <List disablePadding>
          {availableOptions.map(option => {
            const ProductConfiguratorOptionComponent =
              OPTION_TYPE_COMPONENTS_MAPPING[option.type] || OPTION_TYPE_COMPONENTS_MAPPING.default;

            return (
              <ProductConfiguratorOptionComponent
                key={option.option}
                active={option.option === activeOption?.option}
                isFetchingConfiguration={isFetchingConfiguration}
                option={option}
                onChangeConfiguration={onChangeConfiguration}
                onCheckAvailability={handleCheckAvailability}
                onClick={handleClick(option)}
              />
            );
          })}
        </List>
      </Card>
      <AvailabilityDialog
        content={configurationIncompatibleMessage}
        open={showAvailabilityDialog}
        onClose={handleCloseAvailabilityDialog}
        onConfirm={handleConfirmAvailabilityDialog}
      />
    </>
  );
};

ProductConfigurator.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  configuration: PropTypes.object,
  configurationIncompatibleMessage: PropTypes.string,
  isFetchingConfiguration: PropTypes.bool,
  onChangeConfiguration: PropTypes.func,
};

ProductConfigurator.defaultProps = {
  configuration: {},
  configurationIncompatibleMessage: undefined,
  isFetchingConfiguration: false,
  onChangeConfiguration: undefined,
};

export default ProductConfigurator;
