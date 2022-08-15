import NextLink from 'next/link';
import PropTypes from 'prop-types';
import * as Styled from './PaginationButton.styles';

const PaginationButton = ({ href, label }) => (
  <NextLink href={href} prefetch={false} passHref>
    <Styled.Button component="a" variant="text">
      {label}
    </Styled.Button>
  </NextLink>
);

PaginationButton.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default PaginationButton;
