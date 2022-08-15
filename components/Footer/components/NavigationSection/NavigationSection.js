import PropTypes from 'prop-types';
import { CommentsAlt, EnvelopeOpen } from '@icons/index';
import Minus from '@icons/Minus';
import Phone from '@icons/Phone';
import Plus from '@icons/Plus';
import { Box, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
// import NextLink from 'next/link';
import { useState } from 'react';
import * as Styled from './NavigationSection.styles';

const NavigationSection = ({ menus, phoneNumber, openingHours, emailAddress, order }) => {
  const [openSection, setOpenSection] = useState(null);

  const handleClickSectionTitle = idx => () => {
    setOpenSection(openSection !== idx ? idx : null);
  };

  return (
    <Container sx={{ mt: { sm: 5 }, mb: { xs: 0, sm: 6 }, order }}>
      <Grid container spacing={{ xs: 0, sm: 30 / 8 }}>
        {(menus || []).map(({ title, items = [] }, idx) => (
          <Grid item xs={12} sm={3} key={title}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              onClick={handleClickSectionTitle(idx)}
              cursor="pointer"
              py={1}
            >
              <Typography variant="bodyLarge" fontWeight={500}>
                {title}
              </Typography>
              <Box p={1.25} lineHeight={0} display={{ sm: 'none' }} mr={-(7 / 8)}>
                {openSection === idx ? (
                  <Minus sx={{ fontSize: 20 }} />
                ) : (
                  <Plus sx={{ fontSize: 20 }} />
                )}
              </Box>
            </Box>
            <Styled.Collapse in={openSection === idx}>
              <Stack spacing={2} sx={{ mb: { xs: 2, sm: 0 } }}>
                {items.map(item => (
                  // <NextLink passHref href={item.url} key={item.id} prefetch={false}>
                  <Link
                    href={item.url}
                    key={item.id}
                    variant="bodyMedium"
                    color="inherit"
                    title={item.title}
                    underline="hover"
                  >
                    {item.label}
                  </Link>
                  // </NextLink>
                ))}
              </Stack>
            </Styled.Collapse>
            <Divider sx={{ display: { sm: 'none' }, mx: -(15 / 8) }} />
          </Grid>
        ))}
        <Grid item xs={12} sm={3}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            onClick={handleClickSectionTitle(3)}
            cursor="pointer"
            py={1}
          >
            <Typography variant="bodyLarge" fontWeight={500}>
              Contact opnemen
            </Typography>
            <Box p={1.25} lineHeight={0} display={{ sm: 'none' }} mr={-(7 / 8)}>
              {openSection === 3 ? <Minus sx={{ fontSize: 20 }} /> : <Plus sx={{ fontSize: 20 }} />}
            </Box>
          </Box>
          <Styled.Collapse in={openSection === 3}>
            <Box mb={{ xs: 2, sm: 0 }}>
              {/* eslint-disable-next-line react/no-danger */}
              <Box
                sx={theme => ({
                  mb: 2.5,
                  ...theme.typography.bodyMedium,
                  color: 'inherit',
                  'table tr td:first-of-type': {
                    paddingRight: theme.spacing(3),
                  },
                  strong: {
                    fontWeight: 500,
                  },
                })}
                dangerouslySetInnerHTML={{ __html: openingHours || '' }}
              />
              <Box display="flex" alignItems="center" gap={1.5} mb={2.5}>
                <Phone sx={{ fontSize: 20, color: 'grayGeen.700' }} />
                {phoneNumber && (
                  <Link
                    variant="bodyMedium"
                    color="inherit"
                    href={`tel:${phoneNumber}`}
                    title="Bel met de klantenservice"
                    underline="hover"
                  >
                    {phoneNumber}
                  </Link>
                )}
              </Box>
              <Box display="flex" alignItems="center" gap={1.5} mb={2.5}>
                <EnvelopeOpen sx={{ fontSize: 20, color: 'grayGeen.700' }} />
                {emailAddress && (
                  <Link
                    variant="bodyMedium"
                    color="inherit"
                    href={`mailto:${emailAddress}`}
                    title="Mail de klantenservice"
                    underline="hover"
                  >
                    Stuur een mail
                  </Link>
                )}
              </Box>
              <Box display="flex" alignItems="center" gap={1.5}>
                <CommentsAlt sx={{ fontSize: 20, color: 'grayGeen.700' }} />
                <Typography variant="bodyMedium">Start een live chat</Typography>
              </Box>
            </Box>
          </Styled.Collapse>
          <Divider sx={{ display: { sm: 'none' }, mx: -(15 / 8) }} />
        </Grid>
      </Grid>
    </Container>
  );
};

NavigationSection.propTypes = {
  emailAddress: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  menus: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  openingHours: PropTypes.string,
  phoneNumber: PropTypes.string,
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
};

NavigationSection.defaultProps = {
  emailAddress: undefined,
  order: undefined,
  openingHours: undefined,
  phoneNumber: undefined,
};

export default NavigationSection;
