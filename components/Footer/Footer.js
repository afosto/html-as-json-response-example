import BottomBar from '@components/Footer/components/BottomBar';
import NavigationSection from '@components/Footer/components/NavigationSection';
import SecondaryBar from '@components/Footer/components/SecondaryBar';
import TrustBar from '@components/Footer/components/TrustBar';
import PropTypes from 'prop-types';
import TopBar from './components/TopBar';
import * as Styled from './Footer.styles';

const Footer = ({
  usps,
  siteName,
  bottomMenu,
  menus,
  customerServiceEmail,
  phoneNumber,
  paymentMethods,
  openingHours,
  locale,
  shopId,
}) => (
  <Styled.Footer>
    <TopBar order={{ xs: 1, sm: 1 }} usps={usps} />
    <SecondaryBar order={{ xs: 3, sm: 2 }} />
    <NavigationSection
      order={{ xs: 2, sm: 3 }}
      menus={menus}
      emailAddress={customerServiceEmail}
      phoneNumber={phoneNumber}
      openingHours={openingHours}
    />
    <TrustBar order={4} locale={locale} methods={paymentMethods} shopId={shopId} />
    <BottomBar order={5} name={siteName} menuItems={bottomMenu} />
  </Styled.Footer>
);

Footer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bottomMenu: PropTypes.array,
  customerServiceEmail: PropTypes.string,
  locale: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  menus: PropTypes.array,
  openingHours: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  paymentMethods: PropTypes.array,
  phoneNumber: PropTypes.string,
  siteName: PropTypes.string,
  usps: PropTypes.arrayOf(PropTypes.string),
  shopId: PropTypes.number,
};

Footer.defaultProps = {
  bottomMenu: [],
  customerServiceEmail: undefined,
  locale: undefined,
  menus: [],
  openingHours: undefined,
  paymentMethods: [],
  phoneNumber: undefined,
  siteName: null,
  usps: [],
  shopId: undefined,
};

export default Footer;
