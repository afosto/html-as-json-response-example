import { Container, Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const BottomBar = ({ name, menuItems, order }) => (
  <Container
    sx={{
      color: 'grayGreen.800',
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 4,
      order,
    }}
  >
    <Typography variant="bodyMedium">
      &copy; {new Date().getFullYear()}. {name}
    </Typography>
    <Stack component="nav" direction="row" spacing={2}>
      {menuItems?.map(item => (
        <NextLink href={item.url} passHref key={item.id} prefetch={false}>
          <Link color="inherit" variant="bodyMedium" underline="hover" title={item.title}>
            {item.label}
          </Link>
        </NextLink>
      ))}
    </Stack>
  </Container>
);

BottomBar.propTypes = {
  name: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  menuItems: PropTypes.arrayOf(PropTypes.object),
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
};

BottomBar.defaultProps = {
  name: '',
  menuItems: [],
  order: undefined,
};

export default BottomBar;
