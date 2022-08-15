import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useGetLatest from '@hooks/useGetLatest';
import Times from '@icons/Times';
import { Box, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import ProductConfiguratorListItem from '../ProductConfiguratorListItem';
import OptionsGrid from './components/OptionsGrid';

const ProductConfiguratorOptionsDialog = ({
  active,
  onChangeConfiguration,
  onCheckAvailability,
  onClick,
  onDialogExited,
  option,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubOptionValues, setSelectedSubOptionValues] = useState({});
  const [showDialog, setShowDialog] = useState(false);
  const [activeSubOption, setActiveSubOption] = useState(null);
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
            currentSelectedOption => currentSelectedOption.option === subOption.option,
          );

          return { ...acc, [subOption.option]: selectedValue?.value };
        },
        {},
      );

      setSelectedOption(defaultSelectedOptionValue);
      setSelectedSubOptionValues(defaultSelectedSubOptionValues);
    }
  }, [active, getLatestOption, optionId]);

  const handleClick = () => {
    if (onClick && typeof onClick === 'function') {
      onClick();
    }

    setShowDialog(true);
  };

  const handleClose = () => {
    if (!selectedOption) {
      setShowDialog(false);
    }
  };

  const handleSelectOption = optionValue => async () => {
    try {
      setIsLoading(true);
      setSelectedOption(optionValue);

      const firstSubOption = (optionValue.options || []).find(
        subOption => subOption.type === 'dialog',
      );

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

      setIsLoading(false);

      if (firstSubOption) {
        setActiveSubOption(firstSubOption);
      } else {
        setSelectedOption(null);
        setShowDialog(false);
      }
    } catch (error) {
      // TODO: do something with the error.
      setIsLoading(false);
      setSelectedOption(null);
      setShowDialog(false);
    }
  };

  const handleSelectSubOption = subOption => async () => {
    try {
      if (subOption === null) {
        return;
      }

      setIsLoading(true);

      if (onCheckAvailability && typeof onCheckAvailability === 'function') {
        const isValid = await onCheckAvailability(subOption);

        if (!isValid) {
          setIsLoading(false);
          return;
        }
      }

      const updatedSelectedSubOptionValues = {
        ...(selectedSubOptionValues || {}),
        [activeSubOption.option]: subOption?.value,
      };
      setSelectedSubOptionValues(updatedSelectedSubOptionValues);

      const selectedSubOptions = selectedOption.options.reduce((acc, optionValue) => {
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
        value: selectedOption.value,
        label: selectedOption.label,
        selected: selectedSubOptions,
      };

      if (onChangeConfiguration && typeof onChangeConfiguration === 'function') {
        await onChangeConfiguration([selected]);
      }

      const nextSubOption = (selectedOption.options || []).find(
        currentSubOption =>
          currentSubOption.type === 'dialog' && !selectedSubOptionValues[currentSubOption.option],
      );

      setIsLoading(false);

      if (nextSubOption) {
        setActiveSubOption(nextSubOption);
      } else {
        setShowDialog(false);
      }
    } catch (error) {
      // TODO: Do something with error.
      setIsLoading(false);
    }
  };

  return (
    <>
      <ProductConfiguratorListItem active={active} option={option} onClick={handleClick} />
      <Dialog
        open={showDialog}
        onClose={handleClose}
        TransitionProps={{ onExited: onDialogExited }}
        fullWidth
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
          <Box flex={1} textAlign="center">
            {option.label}
          </Box>
          <IconButton onClick={handleClose} disabled={isLoading}>
            <Times sx={{ fontSize: 28 }} />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ pb: 4 }}>
          {!activeSubOption && (
            <OptionsGrid
              isLoading={isLoading}
              options={option.values}
              onSelect={handleSelectOption}
              selectedOption={selectedOption}
            />
          )}
          {!!activeSubOption && (
            <OptionsGrid
              isLoading={isLoading}
              options={activeSubOption.values}
              onSelect={handleSelectSubOption}
              selectedOption={
                selectedSubOptionValues[activeSubOption.option]
                  ? { value: selectedSubOptionValues[activeSubOption.option] }
                  : null
              }
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

ProductConfiguratorOptionsDialog.propTypes = {
  active: PropTypes.bool,
  onChangeConfiguration: PropTypes.func,
  onCheckAvailability: PropTypes.func,
  onClick: PropTypes.func,
  onDialogExited: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  option: PropTypes.object.isRequired,
};

ProductConfiguratorOptionsDialog.defaultProps = {
  active: false,
  onChangeConfiguration: undefined,
  onCheckAvailability: undefined,
  onClick: undefined,
  onDialogExited: undefined,
};

export default ProductConfiguratorOptionsDialog;
