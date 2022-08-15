import styled from '@emotion/styled';
import {
  Select as MuiSelect,
  InputBase as MuiInputBase,
  InputLabel as MuiInputLabel,
} from '@mui/material';

export const InputLabel = styled(MuiInputLabel)`
  position: initial;
  transform: none;
`;

export const Select = styled(MuiSelect)`
  width: auto;
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid ${props => props.theme.palette.grayGreen['100']};
  font-size: 16px;
  transition: ${props =>
    props.theme.transitions.create(['border-color', 'background-color', 'box-shadow'])};

  &:hover {
    border-color: ${props => props.theme.palette.grayGreen['300']};
  }

  &.Mui-focused {
    border-color: ${props => props.theme.palette.grayGreen['500']};
  }

  .MuiSvgIcon-root {
    right: 16px;
  }

  .MuiOutlinedInput-notchedOutline {
    border: 0;
  }

  && .MuiSelect-select {
    padding: 12px 52px 12px 16px;
  }

  .MuiFormHelperText-root {
    margin: 0;
  }
`;

export const InputBase = styled(MuiInputBase)`
  & .MuiInputBase-input {
    position: relative;
  }
`;
