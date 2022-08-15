import Image from '@components/Image';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const CategoriesGridItem = ({ component, href, label, icon }) => (
  <Box
    {...(component ? { component } : {})}
    {...(href ? { href } : {})}
    position="relative"
    display="flex"
    flexDirection="column"
    alignItems="center"
    px={2}
    pb={1.5}
    sx={theme => ({
      color: theme.palette.text.primary,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.grayGreen[800],
        textDecoration: 'underline',
      },
      [theme.breakpoints.down('sm')]: {
        '&:nth-child(2n+2)::before': {
          display: 'none',
        },
      },
      [theme.breakpoints.between('sm', 'md')]: {
        '&:nth-child(3n+3)::before': {
          display: 'none',
        },
      },
      [theme.breakpoints.up('md')]: {
        '&:nth-child(4n+4)::before': {
          display: 'none',
        },
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '100%',
        width: '1px',
        height: '100%',
        backgroundColor: theme.palette.grey[300],
      },

      '&::after': {
        content: '""',
        position: 'absolute',
        marginTop: 3,
        top: '100%',
        left: 0,
        width: '100%',
        height: '1px',
        backgroundColor: theme.palette.grey[300],
      },
    })}
  >
    <Image src={icon.url} width={60} height={60} />
    <Typography mt={2} variant="bodyExtraLarge" fontWeight={500} align="center">
      {label}
    </Typography>
  </Box>
);

CategoriesGridItem.propTypes = {
  component: PropTypes.elementType,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  label: PropTypes.string,
};

CategoriesGridItem.defaultProps = {
  component: undefined,
  href: undefined,
  icon: undefined,
  label: undefined,
};

export default CategoriesGridItem;
