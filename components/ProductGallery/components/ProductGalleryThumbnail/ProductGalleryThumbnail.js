import Image from '@components/Image';
import { PlayArrow } from '@mui/icons-material';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const ProductGalleryThumbnail = ({ src, isActive, type }) => (
  <Box p={1}>
    <Box
      component="button"
      position="relative"
      display="flex"
      border={0}
      p={0}
      borderRadius={0.5}
      backgroundColor="transparent"
      sx={{
        cursor: 'pointer',
        boxShadow: isActive ? '0 1px 3px 0 rgb(0 0 0 / 25%)' : null,
        transition: theme => theme.transitions.create('box-shadow'),
        overflow: 'hidden',
        '&::before': {
          position: 'absolute',
          top: 0,
          left: 0,
          content: '""',
          width: '100%',
          height: '100%',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, .0)',
          transition: theme => theme.transitions.create('background-color'),
        },
        '&:hover::before': { backgroundColor: 'rgba(0, 0, 0, .3)' },
      }}
    >
      {type === 'video' && (
        <PlayArrow
          fontSize="large"
          sx={{
            color: '#ffffff',
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: 1,
            opacity: isActive ? 1 : 0.5,
            transform: 'translate(-50%, -50%)',
            filter: 'drop-shadow(0 1px 3px rgb(0 0 0 / 25%))',
            transition: theme => theme.transitions.create('opacity'),
          }}
        />
      )}
      <Image src={src} width={200} height={200} layout="intrinsic" />
    </Box>
  </Box>
);

ProductGalleryThumbnail.propTypes = {
  isActive: PropTypes.bool,
  src: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'image']),
};

ProductGalleryThumbnail.defaultProps = {
  isActive: false,
  type: 'image',
};

export default ProductGalleryThumbnail;
