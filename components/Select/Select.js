import AngleDown from '@icons/AngleDown';
import { Box, FormControl, FormHelperText } from '@mui/material';
import PropTypes from 'prop-types';
import * as Styled from './Select.styles';

const iconComponent = props => <AngleDown {...props} />;

const Select = ({
  children,
  fullWidth,
  label,
  labelExtra,
  id,
  FormControlProps,
  helperText,
  error,
  size,
  sx,
  ...rest
}) => (
  <FormControl fullWidth={fullWidth} size={size} sx={sx}>
    <Box display="flex" mb={1}>
      <Styled.InputLabel htmlFor={id}>{label}</Styled.InputLabel>
      {labelExtra && <Box ml="auto">{labelExtra}</Box>}
    </Box>
    <Styled.Select IconComponent={iconComponent} {...rest}>
      {children}
    </Styled.Select>
    {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
  </FormControl>
);

Select.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  error: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  FormControlProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  id: PropTypes.string,
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  labelExtra: PropTypes.any,
  size: PropTypes.string,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
};

Select.defaultProps = {
  children: undefined,
  error: false,
  FormControlProps: undefined,
  fullWidth: false,
  helperText: undefined,
  id: undefined,
  label: undefined,
  labelExtra: undefined,
  size: undefined,
  sx: undefined,
};

export default Select;
