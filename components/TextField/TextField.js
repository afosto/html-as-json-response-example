import { Box, FormControl, FormHelperText } from '@mui/material';
import PropTypes from 'prop-types';
import * as Styled from './TextField.styles';

const TextField = ({ label, id, FormControlProps, helperText, error, fullWidth, ...rest }) => (
  <FormControl variant="standard" fullWidth={fullWidth} {...FormControlProps}>
    {label && (
      <Box display="flex" mb={1}>
        <Styled.InputLabel shrink htmlFor={id}>
          {label}
        </Styled.InputLabel>
      </Box>
    )}
    <Styled.InputBase fullWidth={fullWidth} id={id} {...rest} />
    {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
  </FormControl>
);

TextField.propTypes = {
  error: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  FormControlProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
};

TextField.defaultProps = {
  error: false,
  FormControlProps: undefined,
  fullWidth: false,
  helperText: undefined,
  id: undefined,
  label: undefined,
};

export default TextField;
