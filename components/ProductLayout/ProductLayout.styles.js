import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0px, 1fr);
  grid-template-areas:
    'mobTitle'
    'images'
    'configurator'
    'form'
    'info'
    'trustpilot'
    'shopMore'
    'breadcrumbs';

  ${props => props.theme.breakpoints.up('md')} {
    grid-template-columns: repeat(3, minmax(0px, 1fr));
    grid-column-gap: ${props => props.theme.spacing(3.75)};
    grid-template-areas:
      'breadcrumbs breadcrumbs breadcrumbs'
      'configurator images form'
      'configurator info form'
      '. info trustpilot'
      '. info .'
      'shopMore shopMore shopMore';
  }
`;
