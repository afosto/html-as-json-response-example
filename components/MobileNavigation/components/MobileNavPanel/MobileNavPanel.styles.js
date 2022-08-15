import styled from '@emotion/styled';
import { List as MuiList, ListItem, ListItemButton, ListItemText } from '@mui/material';

export const Base = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background-color: ${props => props.theme.palette.common.white};
`;

export const List = styled(MuiList)`
  position: unset;
`;

export const Spacer = styled(ListItem)`
  height: 20px;
  background-color: ${props => props.theme.palette.grayGreen['25']};
  ${props =>
    !props.disableBorder && `border-bottom: 1px solid ${props.theme.palette.grayGreen['100']}`}
`;

export const BackLinkItem = styled(ListItem)`
  border-bottom: 1px solid ${props => props.theme.palette.grayGreen['100']};

  .MuiListItemSecondaryAction-root {
    right: 20px;
  }
`;

export const BackLinkItemButton = styled(ListItemButton)`
  padding: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.palette.grayGreen['25']};
  color: ${props => props.theme.palette.grayGreen['900']};
`;

export const BackLinkItemText = styled(ListItemText)`
  margin: 0;
`;
