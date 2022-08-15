import { Box } from '@mui/material';
import getPrismicHref from '@utils/getPrismicHref';
import isRelativeUri from '@utils/isRelativeUri';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import CategoriesGridItem from './components/CategoriesGridItem';

const CategoriesGrid = ({ categories }) => (
  <Box
    display="grid"
    gridTemplateColumns={{
      xs: 'repeat(2, 1fr)',
      sm: 'repeat(3, 1fr)',
      md: 'repeat(4, 1fr)',
    }}
    rowGap={6}
    pb={3}
  >
    {(categories || []).map(({ icon, label, link }) => {
      const href = getPrismicHref(link);

      if (!!href && isRelativeUri(href)) {
        return (
          <NextLink key={label} href={href} passHref>
            <CategoriesGridItem label={label} icon={icon} component="a" />
          </NextLink>
        );
      }
      if (!isRelativeUri(href)) {
        return (
          <CategoriesGridItem key={label} label={label} icon={icon} component="a" href={href} />
        );
      }
      return <CategoriesGridItem key={label} label={label} icon={icon} />;
    })}
  </Box>
);

CategoriesGrid.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      label: PropTypes.string,
      // eslint-disable-next-line react/forbid-prop-types
      link: PropTypes.object,
    }),
  ),
};

CategoriesGrid.defaultProps = {
  categories: [],
};

export default CategoriesGrid;
