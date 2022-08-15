import { ArrowRight } from '@mui/icons-material';
import { Box, Divider, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const ProductShopMore = ({ links }) => (
  <>
    <Divider sx={{ my: 3 }} />
    <Typography mb={1} variant="bodyMedium" fontWeight={700}>
      Shop meer
    </Typography>
    <Box display="flex" gap={1} flexWrap="wrap" ml={-1}>
      {links.map(({ label, title, url }) => (
        <NextLink href={url} passHref>
          <Link
            title={label}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              color: theme => theme.palette.black.main,
            }}
            variant="bodyMedium"
            underline="hover"
          >
            <ArrowRight />
            {title}
          </Link>
        </NextLink>
      ))}
    </Box>
  </>
);

ProductShopMore.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

ProductShopMore.defaultProps = {
  links: [],
};

export default ProductShopMore;
