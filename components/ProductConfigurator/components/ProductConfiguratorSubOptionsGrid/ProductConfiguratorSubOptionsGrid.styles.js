import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const OptionsContainer = styled.div`
  align-items: flex-start;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: ${props => props.theme.spacing(0.5)};
  grid-row-gap: ${props => props.theme.spacing(0.5)};
`;

export const OptionButton = styled(Button)`
  justify-content: start;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${props => props.theme.spacing(1)};

  &:hover {
    border: 1px solid ${props => props.theme.palette.grayGreen[300]};
  }

  &.selected {
    border: 1px solid ${props => props.theme.palette.grayGreen[300]};
  }
`;
