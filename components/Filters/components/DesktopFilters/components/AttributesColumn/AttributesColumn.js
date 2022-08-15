import PropTypes from 'prop-types';
import { Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import { COLUMN_WIDTHS } from './constants';

const AttributesColumn = ({ attributes, onClick, title }) => (
  <Grid
    item
    xs={COLUMN_WIDTHS.xs}
    sm={COLUMN_WIDTHS.sm * attributes.length}
    md={COLUMN_WIDTHS.md * attributes.length}
    lg={COLUMN_WIDTHS.lg * attributes.length}
  >
    {title && (
      <Typography variant="bodyMedium" fontWeight="bold">
        {title}
      </Typography>
    )}
    <Grid container columnSpacing={2}>
      {attributes.map(group => (
        <Grid key={group.id} item xs={12 / attributes.length}>
          <List sx={{ pt: !title ? 0 : 1 }} disablePadding>
            {group.values.map(attribute => (
              <NextLink key={attribute.key} href={attribute.link} prefetch={false} passHref>
                <ListItemButton sx={{ py: 0.5 }} onClick={onClick} disableGutters disablePadding>
                  {attribute.icon && (
                    <Image
                      alt={attribute.label}
                      src={attribute.icon.filename}
                      height={20}
                      width={20}
                    />
                  )}
                  <ListItemText sx={{ ml: 1.5 }} primaryTypographyProps={{ variant: 'bodyMedium' }}>
                    {attribute.label}
                  </ListItemText>
                </ListItemButton>
              </NextLink>
            ))}
          </List>
        </Grid>
      ))}
    </Grid>
  </Grid>
);

AttributesColumn.propTypes = {
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      values: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.string,
        }),
      ),
    }),
  ),
  onClick: PropTypes.func,
  title: PropTypes.string,
};

AttributesColumn.defaultProps = {
  attributes: [],
  onClick: undefined,
  title: undefined,
};

export default AttributesColumn;
