import styled from '@emotion/styled';
import { Collapse as MuiCollapse } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const Collapse = styled(MuiCollapse)`
  ${props => props.theme.breakpoints.up('sm')} {
    min-height: initial !important;
    height: initial !important;
    visibility: visible;
  }
`;
