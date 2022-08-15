import styled from '@emotion/styled';
import { InputBase as MuiInputBase, InputLabel as MuiInputLabel } from '@mui/material';

export const InputLabel = styled(MuiInputLabel)`
  position: initial;
  transform: none;
`;

export const InputBase = styled(MuiInputBase)`
  & .MuiInputBase-input {
    position: relative;
    width: 100%;
    padding: 12px 16px;
    border-radius: 2px;
    background-color: #fff;
    border: 1px solid ${props => props.theme.palette.grayGreen['100']};
    font-size: 16px;
    transition: ${props =>
      props.theme.transitions.create(['border-color', 'background-color', 'box-shadow'])};

    &.MuiInputBase-inputSizeSmall {
      padding: 8px 16px;
    }

    &:hover {
      border-color: ${props => props.theme.palette.grayGreen['300']};
    }

    &:focus {
      border-color: ${props => props.theme.palette.grayGreen['500']};
    }
  }
`;
