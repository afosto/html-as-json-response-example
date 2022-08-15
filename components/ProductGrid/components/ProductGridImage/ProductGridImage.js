import Image from '@components/Image';
import PropTypes from 'prop-types';
import * as Styled from './ProductGridImage.styles';

const ProductGridImage = ({ gridImage }) => {
  const { filename, url } = gridImage;

  return (
    <Styled.Container sx={{}}>
      {url && (
        <a href={url}>
          <Image src={filename} layout="fill" />
        </a>
      )}
      {!url && <Image src={filename} layout="fill" />}
    </Styled.Container>
  );
};

ProductGridImage.propTypes = {
  gridImage: PropTypes.shape({
    filename: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default ProductGridImage;
