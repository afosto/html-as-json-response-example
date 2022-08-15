const formatMenuItems = (menuItems = {}) =>
  Object.values(menuItems).map(menuItem => {
    if (Object.keys(menuItem.items || {}).length > 0) {
      return { ...menuItem, items: formatMenuItems(menuItem.items) };
    }

    return menuItem;
  });

export default formatMenuItems;
