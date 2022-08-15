import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button, Typography } from '@mui/material';
import * as Styled from './ProductDescription.styles';
import translations from './translations';

const ProductDescription = ({ description }) => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <>
      <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
        <FormattedMessage {...translations.title} />
      </Typography>
      <Styled.Collapse collapsedSize={64} in={readMore}>
        <Typography variant="bodyMedium" dangerouslySetInnerHTML={{ __html: description }} />
      </Styled.Collapse>
      <Button size="small" onClick={handleReadMore} sx={{ mt: 1 }}>
        <Typography color="grayStone.700" variant="bodyMedium" fontWeight="bold">
          <FormattedMessage {...translations[readMore ? 'readLess' : 'readMore']} />
        </Typography>
      </Button>
    </>
  );
};

ProductDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ProductDescription;
