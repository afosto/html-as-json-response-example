import { Box } from '@mui/material';
import findObjectInArray from '@utils/findObjectInArray';
import Image from 'next/image';

const formatSubMenuItems = (menuItem, menuIcons = []) => {
  const isColumnItem = menuItem.label.startsWith('column');
  const columnItems = (menuItem.items || [])
    .filter(item => item.label?.startsWith('column'))
    .reduce((itemsAcc, item) => [...itemsAcc, ...(item.items || [])], []);
  const otherItems = (menuItem.items || []).filter(item => !item.label?.startsWith('column'));
  const items = [...otherItems, ...columnItems].map(item => {
    const image = findObjectInArray(menuIcons, 'title', item.label)?.filename?.replace(
      '/1170x250',
      '',
    );

    return {
      ...item,
      icon: image ? (
        <Box width={32} height={32} mr={2.5} ml={-0.5}>
          <Image src={image} width={32} height={32} alt={item.label} loader={({ src }) => src} />
        </Box>
      ) : undefined,
    };
  });

  return [
    ...(!isColumnItem && items.length > 0
      ? [
          {
            ...menuItem,
            items,
            parent: menuItem.parent || 'root',
          },
        ]
      : []),
    ...items.reduce((acc, item) => [...acc, ...formatSubMenuItems(item, menuIcons)], []),
  ];
};

export default formatSubMenuItems;
