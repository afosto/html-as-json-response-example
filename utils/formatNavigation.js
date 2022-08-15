const getLevelNumber = type => parseInt(type.replace('navigation_level', ''), 10);

const formatNavigation = (items, formatUrl) => {
  const sentinel = { text: '', id: '', level: 0 };
  const traversalStack = [sentinel];

  (items || []).map(item => {
    const { slice_type: sliceType } = item;
    const hLevel = getLevelNumber(sliceType);
    for (
      let last = traversalStack[traversalStack.length - 1];
      hLevel <= last.level;
      traversalStack.pop(), last = traversalStack[traversalStack.length - 1]
    );

    const last = traversalStack[traversalStack.length - 1];
    last.items = last.items || [];
    last.items.push({
      label: item.primary?.label,
      title: item.primary?.title,
      url:
        typeof formatUrl === 'function'
          ? formatUrl(item.primary?.link?.data?.url)
          : item.primary?.link?.data?.url,
      level: hLevel,
    });
    traversalStack.push(last.items[last.items.length - 1]);

    return null;
  });

  return sentinel.items || [];
};

export default formatNavigation;
