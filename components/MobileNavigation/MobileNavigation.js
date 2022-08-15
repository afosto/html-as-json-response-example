import { Box, Drawer } from '@mui/material';
import findObjectInArray from '@utils/findObjectInArray';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { LOCALE_FLAG_COMPONENT_MAPPING } from '../../constants';
import MobileNavHeader from './components/MobileNavHeader';
import MobileNavPanel from './components/MobileNavPanel';
import formatSubMenuItems from './utils/formatSubMenuItems';
import translations from './translations';

const MobileNavigation = ({
  open,
  onClose,
  mainMenu,
  secondaryMenu,
  contactMenu,
  menuIcons,
  currentLocale,
  hrefLang,
  currencies,
}) => {
  const intl = useIntl();
  const [currentPath, setCurrentPath] = useState('root');
  const panels = useMemo(() => {
    const hrefLangItems = (hrefLang || []).reduce(
      (acc, lang) => [
        ...acc,
        {
          label: lang.label,
          id: lang.locale,
          url: lang.href,
          parent: 'root',
          items: [],
          icon: LOCALE_FLAG_COMPONENT_MAPPING[lang.key],
        },
      ],
      [],
    );

    const panelItems = mainMenu.reduce((acc, menuItem) => {
      const items = formatSubMenuItems(menuItem, menuIcons);
      return [...acc, ...items];
    }, []);

    const rootPanel = {
      id: 'root',
      label: intl.formatMessage(translations.rootPanelLabel),
      items: panelItems,
    };

    const hrefLangPanel = {
      id: 'hrefLang',
      label: intl.formatMessage(translations.rootPanelLabel),
      items: hrefLangItems,
      currencies,
      parent: 'root',
      parentItem: rootPanel,
    };

    return [
      rootPanel,
      ...panelItems.map(item => ({
        ...item,
        parentItem: findObjectInArray([rootPanel, ...panelItems], 'id', item.parent),
      })),
      hrefLangPanel,
    ];
  }, [intl, currencies, hrefLang, mainMenu, menuIcons]);

  const handleTraverseMenu = path => () => {
    if (currentPath.includes(path)) {
      setCurrentPath(currentPath.substring(0, currentPath.indexOf(`.${path}`) + `.${path}`.length));
      return;
    }
    setCurrentPath(`${currentPath}.${path}`);
  };

  const resetMenu = () => {
    setCurrentPath('root');
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      SlideProps={{ onExited: resetMenu }}
      PaperProps={{
        sx: {
          width: 'calc(100% - 55px)',
          maxWidth: 320,
        },
      }}
    >
      <MobileNavHeader
        onClose={onClose}
        onOpenHrefLang={handleTraverseMenu('hrefLang')}
        currentLocale={currentLocale}
      />
      <Box position="relative" flex={1}>
        {panels.map(panel => (
          <MobileNavPanel
            active={currentPath.includes(panel.id)}
            id={panel.id}
            key={panel.id}
            onClose={onClose}
            onTraverse={handleTraverseMenu}
            items={panel.items}
            header={panel.label}
            parent={panel.parentItem}
            panel={panel}
            showAllLink={!!panel.parentItem && panel.id !== 'hrefLang'}
            {...(panel.id === 'root' ? { secondaryMenu, contactMenu } : {})}
          />
        ))}
      </Box>
    </Drawer>
  );
};

MobileNavigation.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  contactMenu: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  currencies: PropTypes.array,
  currentLocale: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  hrefLang: PropTypes.array,
  // eslint-disable-next-line react/forbid-prop-types
  languages: PropTypes.array,
  // eslint-disable-next-line react/forbid-prop-types
  mainMenu: PropTypes.array,
  // eslint-disable-next-line react/forbid-prop-types
  menuIcons: PropTypes.array,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  secondaryMenu: PropTypes.object,
};

MobileNavigation.defaultProps = {
  contactMenu: undefined,
  currencies: [],
  currentLocale: undefined,
  hrefLang: undefined,
  languages: [],
  mainMenu: [],
  menuIcons: [],
  onClose: undefined,
  open: false,
  secondaryMenu: undefined,
};

export default MobileNavigation;
