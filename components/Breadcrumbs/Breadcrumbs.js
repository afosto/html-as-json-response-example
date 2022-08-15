import { Link, Typography, Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ className, items, separator, sx, typographyProps }) => (
  <MuiBreadcrumbs className={className} separator={separator} sx={sx}>
    {items.map(({ key, label, url }, idx) => {
      if (idx + 1 === items.length) {
        return (
          <Typography key={key} variant="bodyMedium" color="inherit" {...typographyProps}>
            {label}
          </Typography>
        );
      }
      return (
        <NextLink key={key} href={url} prefetch={false} passHref>
          <Link variant="bodyMedium" color="inherit" underline="hover" {...typographyProps}>
            {label}
          </Link>
        </NextLink>
      );
    })}
  </MuiBreadcrumbs>
);

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
  separator: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  // eslint-disable-next-line react/forbid-prop-types
  typographyProps: PropTypes.object,
};

Breadcrumbs.defaultProps = {
  className: undefined,
  separator: undefined,
  sx: {},
  typographyProps: {},
};

export default Breadcrumbs;
