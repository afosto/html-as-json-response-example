import { QuestionMark } from '@mui/icons-material';
import { IconButton, Popover, TableCell, TableRow, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ProductDetailsRow = ({ label, value, description }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <TableRow>
      <TableCell variant="head" sx={{ width: '33%' }}>
        {label}
      </TableCell>
      <TableCell>{value}</TableCell>
      <TableCell align="right">
        {description && (
          <>
            <IconButton
              size="small"
              edge="end"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <QuestionMark sx={{ fontSize: 12 }} />
            </IconButton>
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'right',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
              PaperProps={{
                sx: {
                  maxWidth: 276,
                  p: 2,
                },
              }}
            >
              <Typography variant="body2">{description}</Typography>
            </Popover>
          </>
        )}
      </TableCell>
    </TableRow>
  );
};

ProductDetailsRow.propTypes = {
  description: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

ProductDetailsRow.defaultProps = {
  description: undefined,
};

export default ProductDetailsRow;
