import PropTypes from 'prop-types';
import { Container, Typography } from '@mui/material';
import Image from '@components/Image';
import * as Styled from './BlogBanner.styles';

const BlogBanner = ({ image, imageAlt, title, overline, date, timeToRead, action }) => (
  <Styled.Wrapper>
    {image && (
      <Styled.ImageWrapper>
        <Image src={image} layout="fill" objectFit="cover" priority alt={imageAlt} />
      </Styled.ImageWrapper>
    )}
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {overline && (
        <Typography variant="bodyLarge" align="center" color="primary.500" mb={2.5}>
          {overline}
        </Typography>
      )}
      <Typography variant="display1" align="center" color="common.white" mb={4}>
        {title}
      </Typography>
      <Typography
        variant="bodyLarge"
        align="center"
        color="primary.500"
        fontWeight={500}
        mb={action ? 6 : 0}
      >
        {date} {timeToRead && ` | ${timeToRead} minuten`}
      </Typography>
      {action}
    </Container>
  </Styled.Wrapper>
);

BlogBanner.propTypes = {
  action: PropTypes.oneOfType([PropTypes.object, PropTypes.elementType]),
  date: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  overline: PropTypes.string,
  timeToRead: PropTypes.string,
  title: PropTypes.string,
};

BlogBanner.defaultProps = {
  action: undefined,
  date: undefined,
  image: undefined,
  imageAlt: undefined,
  overline: undefined,
  timeToRead: undefined,
  title: undefined,
};

export default BlogBanner;
