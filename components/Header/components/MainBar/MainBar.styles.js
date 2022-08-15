import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-content: space-evenly;
  grid-template-areas: 'menu logo utils' 'search search search';
  align-items: center;
  padding-top: 24px;

  ${props => props.theme.breakpoints.down('md')} {
    grid-template-rows: repeat(2, min-content);
    margin-left: -15px;
    margin-right: -15px;
    row-gap: ${props => props.theme.spacing(3)};
  }

  ${props => props.theme.breakpoints.up('sm')} {
    gap: 30px;
  }

  ${props => props.theme.breakpoints.up('md')} {
    grid-template-areas: 'search logo utils';
    padding-bottom: 8px;
  }
`;
