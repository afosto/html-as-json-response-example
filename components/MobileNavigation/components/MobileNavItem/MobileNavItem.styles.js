import styled from '@emotion/styled';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

export const Item = styled(ListItem)`
  border-bottom: 1px solid ${props => props.theme.palette.grayGreen['100']};

  &.all-link {
    background-color: ${props => props.theme.palette.grayGreen['25']};

    .MuiTypography-root {
      font-weight: 700;
    }
  }

  .MuiListItemSecondaryAction-root {
    right: 0;

    .MuiIconButton-root {
      height: 100%;
      width: 64px;
    }
  }
`;

export const ItemButton = styled(ListItemButton)`
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(2.5)};
`;

export const ItemText = styled(ListItemText)`
  margin: 0 0 -2px;
  ${props => props.theme.typography.bodyMedium};
`;
