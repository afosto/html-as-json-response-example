import NextImage from 'next/image';
import PropTypes from 'prop-types';
import rewriteQuicqUrl from '@utils/rewriteQuicqUrl';

const quicqLoader = ({ src, width, quality }) =>
  `${src}?w=${width}${quality ? `&q=${quality}` : ''}`;

const Image = ({ src, width, height, layout, ...rest }) => {
  if (!src) {
    return 'No src added';
  }

  return (
    <NextImage
      src={rewriteQuicqUrl(src)}
      blurDataURL={rewriteQuicqUrl(src, { w: 10, h: 10 })}
      {...(layout !== 'fill' ? { width: width ?? 1 } : {})}
      {...(layout !== 'fill' ? { height: height ?? 1 } : {})}
      layout={layout}
      loader={quicqLoader}
      {...rest}
    />
  );
};

Image.propTypes = {
  height: PropTypes.number,
  layout: PropTypes.oneOf(['intrinsic', 'fixed', 'responsive', 'fill']),
  objectFit: PropTypes.string,
  objectPosition: PropTypes.string,
  placeholder: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number,
};

Image.defaultProps = {
  height: 50,
  layout: 'intrinsic',
  objectFit: 'contain',
  objectPosition: 'center',
  placeholder: 'blur',
  src: undefined,
  width: 50,
};

export default Image;
