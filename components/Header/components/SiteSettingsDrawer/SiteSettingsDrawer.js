import DrawerHeader from '@components/DrawerHeader';
import { Drawer, List, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { LOCALE_FLAG_COMPONENT_MAPPING } from '../../constants';
import translations from './translations';
import SiteSettingsSection from './components/SiteSettingsSection';

const SiteSettingsDrawer = ({ open, onClose, hrefLang, currentLocale }) => {
  const intl = useIntl();
  const [shortLocale] = currentLocale ? currentLocale.split('-').reverse() : ['en'];
  const [openSectionKey, setOpenSectionKey] = useState(null);

  const formattedHrefLang = (hrefLang || []).map(({ key, ...rest }) => {
    const [formattedKey] = key.toLowerCase().split('-').reverse();

    return {
      ...rest,
      key,
      icon: LOCALE_FLAG_COMPONENT_MAPPING[formattedKey],
    };
  });

  const handleClickSectionHeader = id => () =>
    setOpenSectionKey(prevState => (prevState === id ? null : id));

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="right"
      PaperProps={{ sx: { width: '90%', maxWidth: 400 } }}
      SlideProps={{ onExited: () => setOpenSectionKey(null) }}
    >
      <DrawerHeader onClose={onClose} sx={{ borderBottom: '0 !important' }} />
      <Typography variant="h6" component="span" px={4}>
        <FormattedMessage {...translations.drawerTitle} />
      </Typography>
      <List disablePadding>
        {formattedHrefLang.length > 0 && (
          <SiteSettingsSection
            title={intl.formatMessage(translations.languageTitle)}
            open={openSectionKey === 'language'}
            activeOption={shortLocale}
            options={formattedHrefLang}
            onClickSectionHeader={handleClickSectionHeader('language')}
          />
        )}
      </List>
    </Drawer>
  );
};

SiteSettingsDrawer.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  hrefLang: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

SiteSettingsDrawer.defaultProps = {};

export default SiteSettingsDrawer;
