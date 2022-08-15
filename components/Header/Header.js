import PropTypes from 'prop-types';
import MainBar from './components/MainBar';
import NavBar from './components/NavBar';
import UspsBar from './components/UspsBar';
import * as Styled from './Header.styles';

const Header = ({ menuItems, phoneNumber, usp, handleOpenMobileNav, currency, hrefLang }) => (
  <Styled.AppBar position="sticky" elevation={0}>
    <UspsBar phoneNumber={phoneNumber} usp={usp} />
    <MainBar onOpenMobileNav={handleOpenMobileNav} currency={currency} hrefLang={hrefLang} />
    <NavBar menuItems={menuItems} />
  </Styled.AppBar>
);

Header.propTypes = {
  currency: PropTypes.string,
  handleOpenMobileNav: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  hrefLang: PropTypes.array,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string.isRequired, url: PropTypes.string.isRequired }),
  ),
  phoneNumber: PropTypes.string,
  usp: PropTypes.string,
};

Header.defaultProps = {
  currency: undefined,
  handleOpenMobileNav: undefined,
  hrefLang: undefined,
  menuItems: [],
  phoneNumber: undefined,
  usp: undefined,
};

export default Header;
