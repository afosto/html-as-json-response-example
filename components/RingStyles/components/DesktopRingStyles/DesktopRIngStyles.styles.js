import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const LinkWrapper = styled.a`
  display: block;
  border: 1px solid ${props => props.theme.palette.grey[200]};
  border-radius: 4px;

  &:hover {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  }
`;
