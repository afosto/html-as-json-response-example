import styled from '@emotion/styled';
import { Box } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled(Box)`
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.common.white};
`;
