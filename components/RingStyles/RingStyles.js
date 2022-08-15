import DesktopRingStyles from '@components/RingStyles/components/DesktopRingStyles';
import MobileRingStyles from '@components/RingStyles/components/MobileRingStyles';
import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';

const RingStyles = ({ ringStyles }) => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  if (isMobile) {
    return <MobileRingStyles ringStyles={ringStyles} />;
  }

  return <DesktopRingStyles ringStyles={ringStyles} />;
};

RingStyles.propTypes = {
  ringStyles: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      image: PropTypes.shape({
        alt: PropTypes.string,
        url: PropTypes.string,
      }),
      link: PropTypes.string,
    }),
  ),
};

RingStyles.defaultProps = {
  ringStyles: [],
};

export default RingStyles;
