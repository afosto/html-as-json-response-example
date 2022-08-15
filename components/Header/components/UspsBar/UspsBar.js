import Phone from '@icons/Phone';
import { Box, Container, Link } from '@mui/material';
import PropTypes from 'prop-types';
import * as Styled from './UspsBar.styles';

const UspsBar = ({ phoneNumber, usp }) => (
  <Styled.Wrapper>
    <Container>
      <Styled.Inner>
        <Box
          component={Link}
          display="flex"
          alignItems="center"
          gap={1.5}
          gridArea="phone"
          color="inherit"
          href={`tel:${phoneNumber}`}
          title="Bel met de klantenservice"
          underline="hover"
        >
          <Phone sx={{ fontSize: 16 }} /> {phoneNumber}
        </Box>
        <Box gridArea="usp" textAlign="center">
          {usp}
        </Box>
        <Box gridArea="trust" display="flex" justifyContent="flex-end">
          trustpilot
        </Box>
      </Styled.Inner>
    </Container>
  </Styled.Wrapper>
);

UspsBar.propTypes = {
  phoneNumber: PropTypes.string,
  usp: PropTypes.string,
};

UspsBar.defaultProps = {
  phoneNumber: undefined,
  usp: undefined,
};

export default UspsBar;
