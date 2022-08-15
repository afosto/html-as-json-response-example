import { Global } from '@emotion/react';
import { Box } from '@mui/material';
import LightGallery from 'lightgallery/react';
import PropTypes from 'prop-types';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useEffect, useMemo, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper';
/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
/* eslint-enable import/no-unresolved */
import ProductGalleryImage from './components/ProductGalleryImage';
import ProductGalleryVideo from './components/ProductGalleryVideo';
import ProductGalleryThumbnail from './components/ProductGalleryThumbnail';

const ProductGallery = ({ images, videos }) => {
  const [galleryInstance, setGalleryInstance] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const formattedImages = images.map(({ src, thumbs }) => ({
    src,
    type: 'image',
    thumb: thumbs[200],
  }));

  const galleryItems = useMemo(() => [...formattedImages], [formattedImages]);

  useEffect(() => {
    if (galleryInstance) {
      galleryInstance.refresh(galleryItems);
    }
  }, [galleryInstance, galleryItems]);

  return (
    <Box sx={{ position: 'relative', zIndex: 0 }}>
      <Global
        styles={`
          .lg-container {
            .lg-backdrop,
            .lg-outer .lg-thumb-outer {
              background-color: #fff;
            }

            .lg-outer .lg-thumb-item {
              border: 0;
              border-radius: 2px;
              box-shadow: 0 0 5px 1px rgb(0 0 0 / 30%);

              &.active {
                filter: brightness(50%);
              }

              &:hover {
                filter: brightness(75%);
              }
            }

            .lg-toolbar .lg-icon:hover {
              color: #000;
            }

            .lg-next,
            .lg-prev {
              background-color: #fff;

              &:hover:not(.disabled) {
                color: #000;
                background-color: #fff;
             }
          }
      `}
      />
      <LightGallery
        dynamic
        fullScreen
        download={false}
        loop={false}
        onInit={detail => setGalleryInstance(detail.instance)}
        plugins={[lgThumbnail, lgZoom]}
        dynamicEl={galleryItems}
        thumbWidth="56px"
        thumbHeight="56px"
        thumbMargin={12}
      />
      <Box maxHeight={400} maxWidth={400} mx="auto">
        <Swiper
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          modules={[Thumbs, Navigation]}
          draggable={false}
          effect="fade"
          threshold={10}
          onSlideChange={instance => setActiveSlide(instance.activeIndex)}
        >
          {images.map(({ src, thumbs }, idx) => (
            <SwiperSlide key={src}>
              <ProductGalleryImage
                src={src}
                idx={idx}
                thumb={thumbs[400]}
                galleryInstance={galleryInstance}
              />
            </SwiperSlide>
          ))}
          {videos.map(({ src, src_web: srcWebm, thumbs }, idx) => (
            <SwiperSlide key={src}>
              <ProductGalleryVideo
                src={src}
                srcWebm={srcWebm}
                idx={images.length + idx}
                thumb={thumbs[400]}
                galleryInstance={galleryInstance}
                isActive={images.length + idx === activeSlide}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      {/* eslint-disable react/jsx-boolean-value */}
      <Box mx={-1}>
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs, Navigation]}
          watchSlidesProgress={true}
          slidesPerView={5}
          threshold={10}
        >
          {/*    /!* eslint-enable react/jsx-boolean-value *!/ */}
          {images.map(({ thumbs, src }, idx) => (
            <SwiperSlide key={src}>
              <ProductGalleryThumbnail
                src={thumbs[200]}
                isActive={idx === activeSlide}
                type="image"
              />
            </SwiperSlide>
          ))}
          {videos.map(({ thumbs, src }, idx) => (
            <SwiperSlide key={src}>
              <ProductGalleryThumbnail
                src={thumbs[200]}
                isActive={idx + images.length === activeSlide}
                type="video"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

ProductGallery.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  images: PropTypes.array,
  // eslint-disable-next-line react/forbid-prop-types
  videos: PropTypes.array,
};

ProductGallery.defaultProps = {
  images: [],
  videos: [],
};

export default ProductGallery;
