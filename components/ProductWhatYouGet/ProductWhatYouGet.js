import Image from '@components/Image';
import { Typography } from '@mui/material';
import { PrismicRichText } from '@prismicio/react';
import PropTypes from 'prop-types';

const components = {
  image: ({ node: { url, dimensions, alt } = {} }) => <Image src={url} {...dimensions} alt={alt} />,
};

const ProductWhatYouGet = ({ title, content }) => (
  <>
    <Typography variant="h2">{title}</Typography>
    <PrismicRichText field={content} components={components} />
  </>
);

ProductWhatYouGet.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductWhatYouGet;
