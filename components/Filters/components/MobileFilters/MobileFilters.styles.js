import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const ActiveFiltersWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.palette.grayGreen['100']};
  padding: ${props => props.theme.spacing(2)};
`;
