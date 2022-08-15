import TrustBox from '@components/TrustBox';
import TrustedShopsBox from '@components/TrustedShopsBox';
import { Box, Container } from '@mui/material';
import PropTypes from 'prop-types';

const TrustBar = ({ locale, methods, order, shopId }) => (
  <Container
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2.75,
      flexDirection: { xs: 'column', sm: 'row' },
      justifyContent: 'space-between',
      mb: 8,
      mt: 6,
      order,
    }}
  >
    <Box
      display="flex"
      flexDirection="row"
      justifyContent={{ xs: 'center', sm: 'flex-start' }}
      gap={2.5}
      flexWrap="wrap"
    >
      {methods
        .filter(method => method?.icon)
        .map(({ icon, id, description }) => {
          const { filename } = icon || {};

          // eslint-disable-next-line @next/next/no-img-element
          return <img src={filename} key={id} height={24} alt={description} />;
        })}
    </Box>
    {['nl-nl', 'en-us'].includes(locale?.toLowerCase()) && (
      <TrustBox templateId="53aa8807dec7e10d38f59f32" locale={locale} />
    )}
    {!['nl-nl', 'en-us'].includes(locale?.toLowerCase()) && (
      <TrustedShopsBox locale={locale} shopId={shopId} />
    )}
  </Container>
);

TrustBar.propTypes = {
  locale: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  methods: PropTypes.array,
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  shopId: PropTypes.number,
};

TrustBar.defaultProps = {
  locale: undefined,
  methods: [],
  order: undefined,
  shopId: undefined,
};

export default TrustBar;
