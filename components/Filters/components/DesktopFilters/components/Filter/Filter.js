import { useRef } from 'react';
import PropTypes from 'prop-types';
import AngleDown from '@icons/AngleDown';
import AngleUp from '@icons/AngleUp';
import { Button, ClickAwayListener, Typography } from '@mui/material';
import * as Styled from './Filter.styles';

const Filter = ({ children, description, label, onClick, onClose, open }) => {
  const anchorEl = useRef();
  const EndIcon = open ? AngleUp : AngleDown;

  return (
    <>
      <Button
        endIcon={<EndIcon sx={{ color: 'grey.500' }} />}
        variant="outlined"
        color="grayGreen"
        size="small"
        onClick={onClick}
        ref={anchorEl}
        sx={{ justifyContent: 'space-between' }}
      >
        <Typography variant="buttonSmall" fontWeight="bold">
          {label}
        </Typography>
      </Button>
      <Styled.Popover
        anchorEl={anchorEl.current}
        open={open}
        onClose={onClose}
        anchorOrigin={{
          vertical: 36,
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: anchorEl.current?.offsetLeft || 'left',
        }}
        disablePortal
      >
        <ClickAwayListener onClickAway={onClose}>
          <Styled.PopperInnerContainer>
            <Styled.DescriptionWrapper>
              <Typography variant="bodyMedium">{description}</Typography>
            </Styled.DescriptionWrapper>
            <Styled.Wrapper>{children}</Styled.Wrapper>
          </Styled.PopperInnerContainer>
        </ClickAwayListener>
      </Styled.Popover>
    </>
  );
};

Filter.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

Filter.defaultProps = {
  open: false,
};

export default Filter;
