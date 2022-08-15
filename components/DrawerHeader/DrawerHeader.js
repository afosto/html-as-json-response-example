import Times from '@icons/Times';
import { IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import * as Styled from './DrawerHeader.styles';

const DrawerHeader = ({ title, onClose, ...props }) => (
  <Styled.Base {...props}>
    {title && (
      <Typography variant="bodyLarge" fontWeight="bold">
        {title}
      </Typography>
    )}
    <IconButton color="grayGreen" onClick={onClose} sx={{ ml: 'auto', mr: -0.5 }}>
      <Times />
    </IconButton>
  </Styled.Base>
);

DrawerHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

DrawerHeader.defaultProps = {
  title: undefined,
};

export default DrawerHeader;
