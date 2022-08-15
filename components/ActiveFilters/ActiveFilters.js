import Times from '@icons/Times';
import { Box, Chip, Typography } from '@mui/material';
import capitalize from '@utils/capitalize';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import NextLink from 'next/link';
import translations from './translations';

const ActiveFilters = ({ activeFilterOptions }) => (
  <Box display="flex" alignItems="center" gap={0.5}>
    <Typography variant="bodyMedium" mr={1.5}>
      <FormattedMessage {...translations.selectedFiltersLabel} />
    </Typography>
    {Object.values(activeFilterOptions).map(filterOption => (
      <NextLink key={filterOption.key} href={filterOption.link} prefetch={false} passHref>
        <Chip
          component="a"
          color="primary"
          label={capitalize(
            filterOption.label.replace(/edelsteen_|diamant_|half_|pearl_|flat_/, ''),
          )}
          deleteIcon={<Times />}
          onDelete={() => {}}
          size="small"
          sx={{ px: 0.5 }}
        />
      </NextLink>
    ))}
  </Box>
);

ActiveFilters.propTypes = {
  activeFilterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
};

ActiveFilters.defaultProps = {
  activeFilterOptions: [],
};

export default ActiveFilters;
