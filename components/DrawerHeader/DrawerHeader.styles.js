import styled from '@emotion/styled';
import { Box } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const Base = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing(1.5)} ${props => props.theme.spacing(1.25)}
    ${props => props.theme.spacing(1.5)} ${props => props.theme.spacing(2)};
  border-bottom: 1px solid ${props => props.theme.palette.grayGreen['100']};
`;
