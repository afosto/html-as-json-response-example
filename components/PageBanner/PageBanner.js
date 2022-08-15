import Breadcrumbs from '@components/Breadcrumbs';
import Image from '@components/Image';
import { Container, Typography, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import * as Styled from './PageBanner.styles';

const PageBanner = ({ banner, breadcrumbs, title }) => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
  const { alt, url } = banner || {};

  return !isMobile && url ? (
    <Styled.Wrapper>
      <Styled.ImageWrapper>
        <Image alt={alt} src={url} layout="fill" objectFit="cover" />
      </Styled.ImageWrapper>
      <Container>
        <Breadcrumbs
          items={breadcrumbs}
          separator="•"
          typographyProps={{ variant: 'bodyLarge' }}
          sx={{ color: 'common.white' }}
        />
        <Typography variant="h1" color="common.white" mt={2} mb={5.5}>
          {title}
        </Typography>
      </Container>
    </Styled.Wrapper>
  ) : (
    <Container>
      <Breadcrumbs
        items={breadcrumbs}
        separator="•"
        typographyProps={{ variant: 'bodyLarge' }}
        sx={{ mt: 1 }}
      />
      <Typography variant="h1" mt={2} mb={5.5}>
        {title}
      </Typography>
    </Container>
  );
};

PageBanner.propTypes = {
  banner: PropTypes.shape({
    alt: PropTypes.string,
    url: PropTypes.string,
  }),
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string,
      url: PropTypes.string,
      active: PropTypes.bool,
    }),
  ),
  title: PropTypes.string.isRequired,
};

PageBanner.defaultProps = {
  banner: undefined,
  breadcrumbs: [],
};

export default PageBanner;
