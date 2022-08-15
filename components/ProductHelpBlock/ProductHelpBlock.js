import { PaperPlane, PhoneCalling } from '@icons/index';
import { Box, Link, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ProductHelpBlock = ({ emailAddress, emailLabel, text, title, phoneNumber }) => (
  <Box
    backgroundColor={theme => theme.palette.primary.main}
    p={2.5}
    color={theme => theme.palette.common.white}
  >
    <Box maxWidth={420} mx="auto">
      <Typography variant="h4" align="center" fontWeight={400} mb={1.5}>
        {title}
      </Typography>
      <Typography align="center" mb={4}>
        {text}
      </Typography>
      <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: 'repeat(2, 1fr)' }}>
        <Link
          color="inherit"
          sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
          href={`tel:${phoneNumber.replace(/\D/g, '')}`}
        >
          <PhoneCalling fontSize="large" />
          {phoneNumber}
        </Link>
        <Link
          color="inherit"
          sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
          href={`mailto:${emailAddress}`}
        >
          <PaperPlane fontSize="large" />
          {emailLabel}
        </Link>
      </Box>
    </Box>
  </Box>
);

ProductHelpBlock.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  emailLabel: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductHelpBlock;
