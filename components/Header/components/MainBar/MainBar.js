import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Logo from '@components/Logo';
import Bars from '@icons/Bars';
import Heart from '@icons/Heart';
import { Search, ShoppingBag } from '@icons/index';
import Phone from '@icons/Phone';
import User from '@icons/User';
import { Box, Button, Container, IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import afosto from '../../../../afosto.config';
import SiteSettingsDrawer from '../SiteSettingsDrawer';
import SearchBox from './components/SearchBox';
import * as Styled from './MainBar.styles';
import { LOCALE_FLAG_COMPONENT_MAPPING } from '../../constants';

const MainBar = ({ onOpenMobileNav, currency, hrefLang }) => {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-').reverse() : ['en'];
  const [settingsDrawerIsOpen, setSettingsDrawerIsOpen] = useState(false);

  return (
    <>
      <SiteSettingsDrawer
        open={settingsDrawerIsOpen}
        onClose={() => setSettingsDrawerIsOpen(false)}
        hrefLang={hrefLang}
        currentLocale={locale}
      />
      <Container>
        <Styled.Wrapper>
          <SearchBox
            variant="standard"
            aria-label="zoeken"
            placeholder="zoeken"
            sx={{ gridArea: 'search' }}
            startAdornment={
              <InputAdornment position="start">
                <Search sx={{ fontSize: 20 }} />
              </InputAdornment>
            }
          />
          <Box
            sx={{
              gridArea: 'menu',
              display: {
                xs: 'flex',
                md: 'none',
              },
              alignItems: 'center',
              pl: {
                xs: 0.5,
                md: 0,
              },
              gap: {
                xs: 0,
                sm: 1,
              },
            }}
          >
            <IconButton size="large" onClick={onOpenMobileNav} aria-label="Open menu">
              <Bars />
            </IconButton>
            <IconButton size="large" aria-label="Bel ons">
              <Phone />
            </IconButton>
          </Box>
          {/* <NextLink href="/" prefetch={false} passHref> */}
          <Box
            component="a"
            href={afosto.localeDomains[locale]}
            mx="auto"
            height={{
              xs: 48,
              md: 56,
            }}
            title="Diamonds By Me"
          >
            <Logo height="100%" />
          </Box>
          {/* </NextLink> */}
          <Box
            sx={{
              gridArea: 'utils',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: {
                xs: 0,
                sm: 1,
              },
              pr: {
                xs: 0.5,
                md: 0,
              },
            }}
          >
            <Button
              startIcon={LOCALE_FLAG_COMPONENT_MAPPING[shortLocale]}
              sx={{
                mr: 3,
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
              size="small"
              onClick={() => setSettingsDrawerIsOpen(true)}
            >
              {shortLocale.toUpperCase()} / {currency}
            </Button>
            <IconButton
              size="large"
              sx={{
                display: {
                  xs: 'none',
                  sm: 'inline-flex',
                },
              }}
              href={`${afosto.localeDomains[locale]}account`}
            >
              <User />
            </IconButton>
            <IconButton
              aria-label="Wishlist"
              size="large"
              href={`${afosto.localeDomains[locale]}wishlist`}
            >
              <Heart />
            </IconButton>
            <IconButton aria-label="Cart" size="large" href={`${afosto.localeDomains[locale]}cart`}>
              <ShoppingBag />
            </IconButton>
          </Box>
        </Styled.Wrapper>
      </Container>
    </>
  );
};

MainBar.propTypes = {
  currency: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  hrefLang: PropTypes.array,
  onOpenMobileNav: PropTypes.func,
};

MainBar.defaultProps = {
  currency: undefined,
  hrefLang: undefined,
  onOpenMobileNav: undefined,
};

export default MainBar;
