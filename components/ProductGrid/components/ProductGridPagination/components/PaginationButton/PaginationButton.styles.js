import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled(MuiButton)`
  border: 1px solid transparent;
  color: ${props => props.theme.palette.common.black};
  text-transform: uppercase;
  ${props => props.theme.typography.buttonSmall};

  &:hover {
    background-color: ${props => props.theme.palette.grey[200]};
    border-color: ${props => props.theme.palette.grey[300]};
  }
`;
