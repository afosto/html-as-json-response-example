import { Pagination as MuiPagination } from '@mui/material';
import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const Pagination = styled(MuiPagination)`
  .Mui-selected:hover {
    background-color: ${props => props.theme.palette.grey[200]};
    border: 1px solid ${props => props.theme.palette.grey[300]};
  }
`;
