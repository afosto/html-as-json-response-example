import { Diamond } from '@icons/index';
import { Box, Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import * as Styled from './TopBar.styles';

const TopBar = ({ usps, order }) => (
  <Styled.Wrapper sx={{ order }}>
    <Container
      sx={{
        display: 'flex',
        justifyContent: { xs: 'center', md: 'flex-start' },
        flexWrap: 'wrap',
        gap: 8,
      }}
    >
      {usps.map((usp, idx) => (
        <Box
          key={usp}
          display={{ xs: idx ? 'none' : 'flex', md: 'flex' }}
          alignItems="center"
          gap={1}
        >
          <Diamond sx={{ color: 'currentColor', fontSize: 20 }} />
          <Typography variant="bodyMedium" color="inherit">
            {usp}
          </Typography>
        </Box>
      ))}
    </Container>
  </Styled.Wrapper>
);

TopBar.propTypes = {
  usps: PropTypes.arrayOf(PropTypes.string),
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
};

TopBar.defaultProps = {
  usps: [],
  order: undefined,
};

export default TopBar;
