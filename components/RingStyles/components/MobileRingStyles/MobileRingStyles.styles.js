import styled from '@emotion/styled';
import { MenuItem as MuiMenuItem, Popover as MuiPopover } from '@mui/material';

export const Popover = styled(MuiPopover)`
  > .MuiPaper-root {
    display: flex;
    width: ${props => props?.anchorEl?.offsetWidth}px;
    max-height: 300px;

    .MuiFormControl-root {
      padding: 12px;
      border-bottom: 1px solid ${props => props.theme.palette.grey[300]};
    }
  }
`;

export const PopperInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MenuItem = styled(MuiMenuItem)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(1.5)};
  min-height: 58px;
`;
