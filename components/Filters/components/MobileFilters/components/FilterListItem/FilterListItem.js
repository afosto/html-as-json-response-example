import { Checkbox, ListItemButton, ListItemText } from '@mui/material';
import capitalize from '@utils/capitalize';
import Image from 'next/image';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const FilterListItem = ({ attribute }) => (
  <NextLink href={attribute.link} prefetch={false} passHref>
    <ListItemButton sx={{ py: 0.5 }}>
      <Checkbox checked={!!attribute.active} sx={{ mr: 1 }} />
      {attribute.icon && (
        <Image alt={attribute.label} src={attribute.icon.filename} height={20} width={20} />
      )}
      <ListItemText sx={{ ml: 1.5 }} primaryTypographyProps={{ variant: 'bodyMedium' }}>
        {capitalize(attribute.label)}
      </ListItemText>
    </ListItemButton>
  </NextLink>
);

FilterListItem.propTypes = {
  attribute: PropTypes.shape({
    active: PropTypes.bool,
    icon: PropTypes.shape({
      filename: PropTypes.string,
    }),
    label: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default FilterListItem;
