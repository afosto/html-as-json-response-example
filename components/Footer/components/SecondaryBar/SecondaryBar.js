import Logo from '@components/Logo';
import TextField from '@components/TextField';
import { AngleRight } from '@icons/index';
import { Box, Container, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import * as Styled from './SecondaryBar.styles';

const SecondaryBar = ({ order }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container sx={{ mt: { xs: 3, sm: 8 }, mb: { xs: 0, sm: 7 }, order }}>
      <Grid container spacing={30 / 8} alignItems="center">
        <Grid item sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          <Logo height={56} />
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={4}>
          <form onSubmit={handleSubmit}>
            <Typography variant="bodyMedium" fontWeight="500" mb={1}>
              Stuur mij het laatste nieuws en speciale acties
            </Typography>
            <Box display="flex">
              <TextField fullWidth inputProps={{ 'aria-label': 'email' }} />
              <Styled.IconButton color="primary" type="submit" aria-label="Aanmelden">
                <AngleRight sx={{ fontSize: 20 }} />
              </Styled.IconButton>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

SecondaryBar.propTypes = {
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
};

SecondaryBar.defaultProps = {
  order: undefined,
};

export default SecondaryBar;
