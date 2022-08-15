import formatMenuItems from './formatMenuItems';

const formatMenus = menus =>
  Object.keys(menus || {}).reduce((acc, menuKey) => {
    const menu = menus[menuKey];

    return {
      ...acc,
      [menuKey]: {
        ...menu,
        items: formatMenuItems(menu.items),
      },
    };
  }, {});

export default formatMenus;
