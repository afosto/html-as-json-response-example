import styled from '@emotion/styled';
import { AppBar as MuiAppBar } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const AppBar = styled(MuiAppBar)`
  background-color: #fff;
  color: ${props => props.theme.palette.grayGreen['900']};
  border-bottom: 1px solid ${props => props.theme.palette.grayGreen['100']};
  z-index: 1039;

  ${props => props.theme.breakpoints.between('sm', 'md')} {
    overflow: hidden;
  }
`;
