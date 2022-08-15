import styled from '@emotion/styled';
import { Card, CardActionArea } from '@mui/material';

export const Container = styled(Card)`
  position: relative;
  border: 1px solid transparent;
  padding: ${props => props.theme.spacing(2)};
  background-color: transparent;
  z-index: 0;
  transition: ${props =>
    props.theme.transitions.create(['box-shadow', 'border-color', 'background-color'])};

  &:hover {
    border-color: ${props => props.theme.palette.grey[300]};
    background-color: ${props => props.theme.palette.common.white};
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
  }
`;

export const ActionArea = styled(CardActionArea)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .MuiCardActionArea-focusHighlight {
    background-color: transparent;
  }
`;
