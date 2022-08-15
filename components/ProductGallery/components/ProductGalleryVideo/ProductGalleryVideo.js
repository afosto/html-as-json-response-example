import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const ProductGalleryVideo = ({ src, srcWebm, thumb, isActive }) => {
  const videoRef = useRef(null);

  const handleToggleVideo = () =>
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();

  useEffect(() => {
    if (isActive) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <Box component="button" display="contents" onClick={handleToggleVideo}>
      <Box
        component="video"
        width="100%"
        playsInline
        controlsList="nodownload"
        loop
        preload="metadata"
        ref={videoRef}
        poster={thumb}
      >
        <source src={src} type="video/mp4" />
        <source src={srcWebm} type="video/webm" />
      </Box>
    </Box>
  );
};

ProductGalleryVideo.propTypes = {
  isActive: PropTypes.bool,
  src: PropTypes.string.isRequired,
  srcWebm: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};

ProductGalleryVideo.defaultProps = {
  isActive: false,
};

export default ProductGalleryVideo;
