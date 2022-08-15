import styled from '@emotion/styled';
import { Popover as MuiPopover } from '@mui/material';

export const DescriptionWrapper = styled.div`
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.common.white};
  padding: ${props => props.theme.spacing(4)};
`;

export const Wrapper = styled.div`
  padding: ${props => props.theme.spacing(4)};
  overflow-y: auto;
`;

export const Popover = styled(MuiPopover)`
  > .MuiPaper-root {
    display: flex;
    width: ${props => props.theme.containerWidths.lg - props.theme.gutter}px;
    max-height: 500px;

    ${props => props.theme.breakpoints.between('sm', 'md')} {
      width: ${props => props.theme.containerWidths.sm - props.theme.gutter}px;
    }

    ${props => props.theme.breakpoints.between('md', 'lg')} {
      width: ${props => props.theme.containerWidths.md - props.theme.gutter}px;
    }

    .MuiFormControl-root {
      padding: 12px;
      border-bottom: 1px solid ${props => props.theme.palette.grey[300]};
    }
  }
`;

export const PopperInnerContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  width: 100%;
`;
