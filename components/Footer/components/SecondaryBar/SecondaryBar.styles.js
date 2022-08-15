import styled from '@emotion/styled';
import { IconButton as MuiIconButton } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const IconButton = styled(MuiIconButton)`
  margin-left: -3px;
  padding: 14px;
  background-color: ${props => props.theme.palette.primary.main};
  border-radius: 2px;
  color: ${props => props.theme.palette.common.white};
`;
