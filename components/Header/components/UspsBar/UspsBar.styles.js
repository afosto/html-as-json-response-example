import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: ${props => props.theme.palette.primary['300']};
  color: ${props => props.theme.palette.grayGreen['800']};
  ${props => props.theme.typography.bodySmall};
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'phone usp trust';
  gap: 30px;
`;
