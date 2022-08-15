import styled from '@emotion/styled';
import { Box } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled(Box)`
  position: relative;
  grid-column: 3 / span 2;
  grid-row: 3 / span 2;

  img {
    object-fit: cover;
  }

  ${props => props.theme.breakpoints.between('sm', 'md')} {
    grid-column: 2 / span 2;
  }

  ${props => props.theme.breakpoints.down('sm')} {
    display: none;
  }
`;
