import Minus from '@icons/Minus';
import Plus from '@icons/Plus';
import { Collapse, ListItemButton, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import * as Styled from './Filter.styles';

const Filter = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Styled.Wrapper>
      <ListItemButton onClick={handleToggleOpen}>
        <ListItemText>{title}</ListItemText>
        {open ? <Minus sx={{ fontSize: 20 }} /> : <Plus sx={{ fontSize: 20 }} />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" sx={{ pb: open ? 1 : 0 }}>
        {children}
      </Collapse>
    </Styled.Wrapper>
  );
};

Filter.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

Filter.defaultProps = {
  children: undefined,
};

export default Filter;
