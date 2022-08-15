import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AngleRight from '@icons/AngleRight';
import Times from '@icons/Times';
import {
  Box,
  Divider,
  Typography,
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  Button,
} from '@mui/material';
import useGetLatest from '@hooks/useGetLatest';
import { FormattedMessage } from 'react-intl';
import ProductConfiguratorListItem from '../ProductConfiguratorListItem';
import ProductConfiguratorSubOptionsButtonGroup from '../ProductConfiguratorSubOptionsButtonGroup';
import ProductConfiguratorSubOptionsGrid from '../ProductConfiguratorSubOptionsGrid';
import translations from './translations';

const ProductConfiguratorOptionsCollapse = ({
  active,
  hideOptionValues,
  onChangeConfiguration,
  onCheckAvailability,
  onClick,
  option,
}) => {
  const [selectedOptionValue, setSelectedOptionValue] = useState(null);
  const [selectedSubOptionValues, setSelectedSubOptionValues] = useState({});
  const [showDescriptionDialog, setShowDescriptionDialog] = useState(false);
  const optionId = option?.id;
  const getLatestOption = useGetLatest(option);

  useEffect(() => {
    if (active) {
      const latestOption = getLatestOption();
      const defaultSelectedOptionValue = (latestOption.values || []).find(
        value => latestOption.selected?.value === value.value,
      );
      const defaultSelectedSubOptionValues = (defaultSelectedOptionValue?.options || []).reduce(
        (acc, subOption) => {
          if (subOption.values?.length === 1) {
            const [firstValue] = subOption.values || [];

            return {
              ...acc,
              [subOption.option]: firstValue?.value,
            };
          }

          const selectedValue = (latestOption.selected?.selected || []).find(
            selectedOption => selectedOption.option === subOption.option,
          );

          return { ...acc, [subOption.option]: selectedValue?.value };
        },
        {},
      );

      setSelectedOptionValue(defaultSelectedOptionValue);
      setSelectedSubOptionValues(defaultSelectedSubOptionValues);
    }
  }, [active, getLatestOption, optionId]);

  const availableSubOptionValues = (selectedOptionValue?.options || [])
    .filter(optionValue => optionValue.values?.length > 1 && optionValue.type !== 'dialog')
    .map(optionValue => {
      const selectedOption = (option.selected?.selected || []).find(
        selected => selected.option === optionValue.option,
      );

      return { ...optionValue, selected: selectedOption };
    });

  const handleCloseDescriptionDialog = () => {
    setShowDescriptionDialog(false);
  };

  const handleOpenDescriptionDialog = () => {
    setShowDescriptionDialog(true);
  };

  const handleSelectOption = async optionValue => {
    try {
      if (selectedOptionValue?.value === optionValue.value) {
        return;
      }

      if (onCheckAvailability && typeof onCheckAvailability === 'function') {
        const isValid = await onCheckAvailability(optionValue);

        if (!isValid) {
          return;
        }
      }

      setSelectedOptionValue(optionValue);
      setSelectedSubOptionValues({});

      const selected = {
        option: option.option,
        option_label: option.label,
        value: optionValue.value,
        label: optionValue.label,
        selected: [],
      };

      if (onChangeConfiguration && typeof onChangeConfiguration === 'function') {
        await onChangeConfiguration([selected]);
      }
    } catch (error) {
      // TODO: Do something with error.
    }
  };

  const handleSelectSubOption = subOption => async value => {
    try {
      const providedSubOptionValue = value?.value || value;

      if (providedSubOptionValue === null) {
        return;
      }

      const selectedSubOptionValue = subOption.values.find(
        optionValue => optionValue.value === providedSubOptionValue,
      );

      if (!selectedSubOptionValue) {
        return;
      }

      if (onCheckAvailability && typeof onCheckAvailability === 'function') {
        const isValid = await onCheckAvailability(selectedSubOptionValue);

        if (!isValid) {
          return;
        }
      }

      const updatedSelectedSubOptionValues = {
        ...(selectedSubOptionValues || {}),
        [subOption.option]: providedSubOptionValue,
      };
      setSelectedSubOptionValues(updatedSelectedSubOptionValues);

      const selectedSubOptions = selectedOptionValue.options.reduce((acc, optionValue) => {
        const subOptionValue = updatedSelectedSubOptionValues[optionValue.option];
        const subValueOption = optionValue.values.find(
          subValueOptionValue => subValueOptionValue.value === subOptionValue,
        );

        if (subValueOption) {
          return [
            ...acc,
            {
              option: optionValue.option,
              option_label: optionValue.label,
              value: subValueOption.value,
              label: subValueOption.label,
              selected: [],
            },
          ];
        }

        return acc;
      }, []);

      const selected = {
        option: option.option,
        option_label: option.label,
        value: selectedOptionValue.value,
        label: selectedOptionValue.label,
        selected: selectedSubOptions,
      };

      if (onChangeConfiguration && typeof onChangeConfiguration === 'function') {
        await onChangeConfiguration([selected]);
      }
    } catch (error) {
      // TODO: Do something with error.
    }
  };

  return (
    <>
      <ProductConfiguratorListItem active={active} option={option} onClick={onClick} collapse>
        {availableSubOptionValues.map(subOptionValue => (
          <Box key={subOptionValue.option}>
            <Box p={2}>
              <Typography component="div" variant="bodyMediumMedium" sx={{ mb: 1 }}>
                {subOptionValue.label}
              </Typography>
              {subOptionValue.type !== 'grid' && (
                <ProductConfiguratorSubOptionsButtonGroup
                  onSelect={handleSelectSubOption(subOptionValue)}
                  values={subOptionValue.values}
                  selectedOption={
                    selectedSubOptionValues[subOptionValue.option]
                      ? { value: selectedSubOptionValues[subOptionValue.option] }
                      : null
                  }
                />
              )}
              {subOptionValue.type === 'grid' && (
                <ProductConfiguratorSubOptionsGrid
                  onSelect={handleSelectSubOption(subOptionValue)}
                  selectedOption={
                    selectedSubOptionValues[subOptionValue.option]
                      ? { value: selectedSubOptionValues[subOptionValue.option] }
                      : null
                  }
                  values={subOptionValue.values}
                />
              )}
            </Box>
            <Divider />
          </Box>
        ))}
        {!hideOptionValues && (
          <>
            <Box p={2}>
              <ProductConfiguratorSubOptionsGrid
                onSelect={handleSelectOption}
                selectedOption={selectedOptionValue}
                values={option.values}
              />
            </Box>
            {selectedOptionValue?.description && (
              <Button
                onClick={handleOpenDescriptionDialog}
                size="small"
                variant="text"
                startIcon={<AngleRight />}
                sx={{ mb: 1, ml: 1 }}
              >
                <FormattedMessage
                  {...translations.label}
                  values={{ option: selectedOptionValue?.label?.toLowerCase() }}
                />
              </Button>
            )}
          </>
        )}
      </ProductConfiguratorListItem>
      <Dialog open={showDescriptionDialog} onClose={handleCloseDescriptionDialog} fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
          <Box flex={1}>{selectedOptionValue?.group}</Box>
          <IconButton onClick={handleCloseDescriptionDialog}>
            <Times sx={{ fontSize: 28 }} />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{ pb: 4 }}
          dangerouslySetInnerHTML={{ __html: selectedOptionValue?.description }}
        />
      </Dialog>
    </>
  );
};

ProductConfiguratorOptionsCollapse.propTypes = {
  active: PropTypes.bool,
  hideOptionValues: PropTypes.bool,
  onChangeConfiguration: PropTypes.func,
  onCheckAvailability: PropTypes.func,
  onClick: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  option: PropTypes.object.isRequired,
};

ProductConfiguratorOptionsCollapse.defaultProps = {
  active: false,
  hideOptionValues: false,
  onChangeConfiguration: undefined,
  onCheckAvailability: undefined,
  onClick: undefined,
};

export default ProductConfiguratorOptionsCollapse;
