import AngleUp from '@icons/AngleUp';
import PropTypes from 'prop-types';
import AngleDown from '@icons/AngleDown';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import NextLink from 'next/link';
import { FormattedMessage } from 'react-intl';
import translations from './translations';

const ItemsPerPage = ({ itemsPerPage }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { options = [], value } = itemsPerPage || {};

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const EndIcon = open ? AngleUp : AngleDown;

  return (
    <>
      <Button
        endIcon={<EndIcon sx={{ color: 'grey.500' }} />}
        variant="outlined"
        color="grayGreen"
        size="small"
        onClick={handleClick}
        sx={{ justifyContent: 'space-between', width: { sm: 'initial', xs: '100%' } }}
      >
        <Typography variant="buttonSmall" fontWeight="bold">
          <FormattedMessage {...translations.labelPerPage} values={{ count: value }} />
        </Typography>
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map(option => (
          <NextLink key={option.label} href={option.url} prefetch={false} passHref>
            <MenuItem onClick={handleClose}>
              <FormattedMessage {...translations.labelPerPage} values={{ count: option.label }} />
            </MenuItem>
          </NextLink>
        ))}
      </Menu>
    </>
  );
};

ItemsPerPage.propTypes = {
  itemsPerPage: PropTypes.shape({
    value: PropTypes.number,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        url: PropTypes.string,
      }),
    ),
  }),
};

ItemsPerPage.defaultProps = {
  itemsPerPage: {},
};

export default ItemsPerPage;
