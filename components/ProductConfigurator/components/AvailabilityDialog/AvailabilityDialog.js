import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Times from '@icons/Times';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import translations from './translations';

const AvailabilityDialog = ({ content, onClose, onConfirm, open }) => (
  <Dialog open={open} onClose={onClose} fullWidth>
    <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
      <Box flex={1}>
        <FormattedMessage {...translations.title} />
      </Box>
      <IconButton onClick={onClose}>
        <Times sx={{ fontSize: 28 }} />
      </IconButton>
    </DialogTitle>
    <DialogContent sx={{ pb: 4 }} dangerouslySetInnerHTML={{ __html: content }} />
    <DialogActions sx={{ pb: 2, px: 2 }}>
      <Button variant="outlined" onClick={onClose}>
        <FormattedMessage {...translations.cancel} />
      </Button>
      <Button variant="contained" onClick={onConfirm}>
        <FormattedMessage {...translations.continue} />
      </Button>
    </DialogActions>
  </Dialog>
);

AvailabilityDialog.propTypes = {
  content: PropTypes.string,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  open: PropTypes.bool,
};

AvailabilityDialog.defaultProps = {
  content: undefined,
  onClose: undefined,
  onConfirm: undefined,
  open: false,
};

export default AvailabilityDialog;
