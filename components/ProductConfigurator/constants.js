import ProductConfiguratorOptionsRadioGroup from './components/ProductConfiguratorOptionsRadioGroup';
import ProductConfiguratorOptionsCollapse from './components/ProductConfiguratorOptionsCollapse';
import ProductConfiguratorOptionsDialog from './components/ProductConfiguratorOptionsDialog';
import ProductConfiguratorOptionsText from './components/ProductConfiguratorOptionsText';
import ProductConfiguratorSideRing from './components/ProductConfiguratorSideRing';

export const OPTION_TYPE_COMPONENTS_MAPPING = {
  default: ProductConfiguratorOptionsCollapse,
  dialog: ProductConfiguratorOptionsDialog,
  radioGroup: ProductConfiguratorOptionsRadioGroup,
  sideRing: ProductConfiguratorSideRing,
  text: ProductConfiguratorOptionsText,
};

export const EXCLUDE_CONFIGURATOR_OPTIONS = ['dummy', 'size'];
