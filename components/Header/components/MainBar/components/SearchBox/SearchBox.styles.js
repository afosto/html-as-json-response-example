import styled from '@emotion/styled';
import { InputBase as MuiInputBase } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const InputBase = styled(MuiInputBase)`
  border: 0;
  padding: 8px 12px;
  ${props => props.theme.typography.bodyMedium};

  ${props => props.theme.breakpoints.down('sm')} {
    padding: 12px 12px;
    border-top: 1px solid ${props => props.theme.palette.grayGreen['100']};
  }

  ${props => props.theme.breakpoints.between('sm', 'md')} {
    padding: 12px 12px;
    &::before {
      position: absolute;
      left: -100%;
      top: 0;
      width: 300%;
      border-top: 1px solid ${props => props.theme.palette.grayGreen['100']};
      content: '';
    }
  }

  ${props => props.theme.breakpoints.up('md')} {
    max-width: 290px;
    border-bottom: 1px solid ${props => props.theme.palette.grayGreen['100']};
  }

  ${props => props.theme.breakpoints.up('lg')} {
    max-width: 360px;
  }

  ${props => props.theme.breakpoints.up('xl')} {
    max-width: 420px;
  }

  .MuiInputAdornment-root {
    margin-right: 12px;
  }

  .MuiInputBase-input {
    padding: 0;
  }

  //  TODO: add responsive styling
`;
