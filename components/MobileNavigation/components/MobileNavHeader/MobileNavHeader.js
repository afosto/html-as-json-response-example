import Times from '@icons/Times';
import { Button, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import * as Styled from './MobileNavHeader.styles';

const MobileNavHeader = ({ onClose, onOpenHrefLang, currentLocale }) => (
  <Styled.Header>
    <Button color="grayGreen" onClick={onOpenHrefLang}>
      {currentLocale?.split('-').reverse()[0].toUpperCase()}, EUR
    </Button>
    <IconButton color="grayGreen" onClick={onClose}>
      <Times />
    </IconButton>
  </Styled.Header>
);

MobileNavHeader.propTypes = {
  currentLocale: PropTypes.string,
  onClose: PropTypes.func,
  onOpenHrefLang: PropTypes.func,
};

MobileNavHeader.defaultProps = {
  currentLocale: undefined,
  onClose: undefined,
  onOpenHrefLang: undefined,
};

export default MobileNavHeader;
