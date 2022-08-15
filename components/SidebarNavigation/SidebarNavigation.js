import DrawerHeader from '@components/DrawerHeader';
import { Button, Divider, Drawer, List } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import NavItem from './components/NavItem';

const SidebarNavigation = ({ items, locale, currentUrl, drawerTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Divider />
      <List disablePadding dense sx={{ display: { xs: 'none', md: 'block' } }}>
        {(items ?? []).map(({ label, title, url, items: subItems }) => (
          <NavItem
            label={label}
            title={title}
            items={subItems}
            url={url}
            locale={locale}
            currentUrl={currentUrl}
          />
        ))}
      </List>
      <Button
        fullWidth
        variant="contained"
        sx={{ display: { md: 'none' } }}
        onClick={() => setIsOpen(true)}
      >
        <FormattedMessage
          id="components.sidebarNavigation.mobile.trigger.label"
          defaultMessage="Menu"
        />
      </Button>
      <Drawer
        open={isOpen}
        anchor="right"
        sx={{ display: { md: 'none' } }}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 320,
          },
        }}
      >
        <DrawerHeader onClose={() => setIsOpen(false)} title={drawerTitle} />
        <List dense disablePadding>
          {(items ?? []).map(({ label, title, url, items: subItems }) => (
            <NavItem
              label={label}
              title={title}
              items={subItems}
              url={url}
              locale={locale}
              currentUrl={currentUrl}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </List>
      </Drawer>
    </>
  );
};

SidebarNavigation.propTypes = {
  drawerTitle: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
  currentUrl: PropTypes.string,
};

SidebarNavigation.defaultProps = {
  drawerTitle: undefined,
  currentUrl: undefined,
};

export default SidebarNavigation;
