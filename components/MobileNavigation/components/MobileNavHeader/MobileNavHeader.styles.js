import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing(1.5)};
  border-bottom: 1px solid ${props => props.theme.palette.grayGreen['100']};
`;
