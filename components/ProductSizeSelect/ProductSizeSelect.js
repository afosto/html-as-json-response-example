import Select from '@components/Select';
import { Times } from '@icons/index';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Link,
  MenuItem,
  Typography,
} from '@mui/material';
import { PrismicRichText } from '@prismicio/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const components = {
  paragraph: ({ children, label }) => (
    <Typography mb={2} align={label?.split('-')[0]}>
      {children}
    </Typography>
  ),
  heading1: ({ children }) => (
    <Typography variant="h1" mt={2} mb={1}>
      {children}
    </Typography>
  ),
  heading2: ({ children }) => (
    <Typography variant="h2" mt={2} mb={1}>
      {children}
    </Typography>
  ),
  heading3: ({ children }) => (
    <Typography variant="h3" mt={2} mb={1}>
      {children}
    </Typography>
  ),
  heading4: ({ children }) => (
    <Typography variant="h4" mt={2} mb={1}>
      {children}
    </Typography>
  ),
  heading5: ({ children }) => (
    <Typography variant="h5" mt={2} mb={1}>
      {children}
    </Typography>
  ),
  heading6: ({ children }) => (
    <Typography variant="h6" mt={2} mb={1}>
      {children}
    </Typography>
  ),
  hyperlink: ({ children, data }) => {
    const target = data?.target ? { target: data.target, rel: 'noopener' } : {};

    return (
      <Button href={data.url} variant="contained" {...target}>
        {children}
      </Button>
    );
  },
};

const ProductSizeSelect = ({ onChangeConfiguration, option, sizingGuideContent }) => {
  const [showSizingGuide, setShowSizingGuide] = useState(false);

  const handleShowSizingGuide = () => setShowSizingGuide(true);
  const handleHideSizingGuide = () => setShowSizingGuide(false);

  const handleChange = async event => {
    try {
      const { value } = event.target || {};
      const currentValue = option.values.find(optionValue => optionValue.value === value);
      const selected = {
        option: option.option,
        option_label: option.label,
        label: currentValue?.label,
        value,
        selected: [],
      };

      if (onChangeConfiguration && typeof onChangeConfiguration === 'function') {
        await onChangeConfiguration([selected]);
      }
    } catch (error) {
      // TODO: do something with error.
    }
  };

  return (
    <>
      <Select
        label={option.label}
        labelExtra={
          <Link
            component="button"
            variant="caption"
            underline="always"
            color="common.black"
            onClick={handleShowSizingGuide}
          >
            Maatwijzer
          </Link>
        }
        size="small"
        defaultValue={option.selected?.value}
        helperText="Because of the smaller size, there is a price difference"
        onChange={handleChange}
        sx={theme => ({
          mb: 3,
          '.MuiFormHelperText-root': {
            ...theme.typography.bodySmall,
          },
        })}
        MenuProps={{
          sx: {
            maxHeight: 250,
          },
        }}
        fullWidth
      >
        {option.values.map(optionValue => (
          <MenuItem key={optionValue.value} value={optionValue.value}>
            {optionValue.label}
          </MenuItem>
        ))}
      </Select>
      <Dialog open={showSizingGuide} fullWidth maxWidth="md" onClose={handleHideSizingGuide}>
        <DialogContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" pt={2} pb={2}>
            <Typography variant="h3">{sizingGuideContent.title}</Typography>
            <IconButton size="small" onClick={handleHideSizingGuide}>
              <Times sx={{ fontSize: 40 }} />
            </IconButton>
          </Box>
          <PrismicRichText field={sizingGuideContent.text} components={components} />
        </DialogContent>
      </Dialog>
    </>
  );
};

ProductSizeSelect.propTypes = {
  onChangeConfiguration: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  option: PropTypes.object.isRequired,
  sizingGuideContent: PropTypes.shape({
    title: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    text: PropTypes.arrayOf(PropTypes.object),
  }),
};

ProductSizeSelect.defaultProps = {
  onChangeConfiguration: undefined,
  sizingGuideContent: {},
};

export default ProductSizeSelect;
