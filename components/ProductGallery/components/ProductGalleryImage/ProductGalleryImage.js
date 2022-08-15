import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import ReactImageMagnify from 'react-image-magnify';

const ProductGalleryImage = ({ galleryInstance, src, thumb, idx }) => {
  const handleOpenGallery = () => galleryInstance.openGallery(idx);

  return (
    <Box
      component="button"
      display="contents"
      onTouchStart={handleOpenGallery}
      onClick={handleOpenGallery}
    >
      <ReactImageMagnify
        smallImage={{ isFluidWidth: true, src: thumb }}
        largeImage={{ src, width: 800, height: 800 }}
        enlargedImageContainerStyle={{ zIndex: 1940 }}
        enlargedImagePortalId="zoom-container"
        isHintEnabled={idx === 0}
        hintTextMouse="hover om te zoomen"
        shouldUsePositiveSpaceLens
        lensStyle={{
          backgroundImage: 'none',
          border: '1px solid rgba(0, 0, 0, .1)',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 25%), 0 0 0 500px rgba(255,255,255,.7)',
        }}
      />
    </Box>
  );
};

ProductGalleryImage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  galleryInstance: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};

ProductGalleryImage.defaultProps = {};

export default ProductGalleryImage;
