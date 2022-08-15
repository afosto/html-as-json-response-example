import formatConfiguration from '@clients/dbm/utils/formatConfiguration';
import { useState } from 'react';

const useProductConfiguration = ({ configuration, locale, sku }) => {
  const [configurationState, setConfigurationState] = useState(configuration);
  const [isFetchingConfiguration, setIsFetchingConfiguration] = useState(false);

  const handleChangeConfiguration = async (
    selection,
    { skipApi = false, skipUpdateState = false } = {},
  ) => {
    try {
      let didContainSelection = false;
      const updatedSelection = (configurationState.selected || []).reduce((acc, selected) => {
        const selectedOption = selection.find(value => value.option === selected.option);

        if (selectedOption) {
          didContainSelection = true;
          return [...acc, selectedOption];
        }

        return [...acc, selected];
      }, []);
      const formattedSelection = !didContainSelection
        ? [...updatedSelection, ...selection]
        : updatedSelection;
      let updatedConfiguration = formatConfiguration({
        ...configurationState,
        selected: formattedSelection,
      });

      if (!skipUpdateState) {
        setConfigurationState(updatedConfiguration);
      }

      if (!skipApi) {
        setIsFetchingConfiguration(true);
        const response = await fetch(`/api/dbm/product/${sku}?locale=${locale}`, {
          method: 'POST',
          body: JSON.stringify({ selected: formattedSelection }),
        });
        const responseData = await response.json();
        updatedConfiguration = responseData;

        if (!skipUpdateState) {
          setConfigurationState(responseData);
        }
      }

      setIsFetchingConfiguration(false);
      return updatedConfiguration;
    } catch (error) {
      // TODO: do something with error.

      setIsFetchingConfiguration(false);
      return Promise.reject(error);
    }
  };

  return {
    configurationState,
    isFetchingConfiguration,
    onChangeConfiguration: handleChangeConfiguration,
    setConfigurationState,
  };
};

export default useProductConfiguration;
