import styled from '@emotion/styled';
import { Collapse as MuiCollapse } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const Collapse = styled(MuiCollapse)`
  position: relative;

  :not(.MuiCollapse-entered) {
    ::before {
      position: absolute;
      bottom: 0;
      content: '';
      height: 100%;
      width: 100%;
      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #fff 100%);
      background-repeat: repeat-x;
      transition: 0.2s ease;
    }
  }
`;
