import AngleDown from '@icons/AngleDown';
import { Collapse, IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const getFlattenedItems = items => {
  let children = [];
  const flattenMembers = items.map(m => {
    if (m?.items?.length) {
      children = [...children, ...m.items];
    }
    return m;
  });

  return flattenMembers.concat(children.length ? getFlattenedItems(children) : children);
};

const NavItem = ({ label, level, locale, title, url, items, currentUrl, onClick }) => {
  const flattenedItems = getFlattenedItems(items || []);
  const hasActiveChildren = flattenedItems.some(item => item.url === currentUrl);
  const itemIsActive = url === currentUrl;
  const isActive = hasActiveChildren || itemIsActive;

  const [subListIsOpen, setSubListIsOpen] = useState(isActive);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setSubListIsOpen(isActive);
    }

    return () => {
      isMounted = false;
    };
  }, [isActive]);

  return (
    <>
      <ListItem
        disablePadding
        divider
        sx={{
          ...(level > 1
            ? {
                backgroundColor: theme => theme.palette.grey[100],
              }
            : {}),
          ...(isActive
            ? {
                backgroundColor: theme => theme.palette.primary[900],
                color: theme => theme.palette.primary.contrastText,
              }
            : {}),
          transition: theme =>
            theme.transitions.create(['background-color', 'color'], {
              duration: theme.transitions.duration.shortest,
            }),
        }}
        secondaryAction={
          items && (
            <IconButton
              edge="end"
              onClick={() => setSubListIsOpen(!subListIsOpen)}
              aria-label="toggle sub items"
            >
              <AngleDown
                sx={{
                  ...(isActive
                    ? {
                        backgroundColor: theme => theme.palette.primary[900],
                        color: theme => theme.palette.primary.contrastText,
                      }
                    : {}),
                  transform: `rotate(${subListIsOpen ? '180deg' : '0deg'})`,
                  transition: theme => theme.transitions.create('transform'),
                }}
              />
            </IconButton>
          )
        }
      >
        <NextLink href={url} passHref>
          <ListItemButton component="a" title={title} sx={{ pl: level * 2 }} onClick={onClick}>
            <ListItemText primary={label} />
          </ListItemButton>
        </NextLink>
      </ListItem>
      {items && (
        <Collapse in={subListIsOpen}>
          {(items || []).map(
            ({
              label: subLabel,
              title: subTitle,
              url: subUrl,
              items: subItems,
              level: subLevel,
            }) => (
              <NavItem
                label={subLabel}
                title={subTitle}
                url={subUrl}
                items={subItems}
                locale={locale}
                level={subLevel}
                currentUrl={currentUrl}
                onClick={onClick}
              />
            ),
          )}
        </Collapse>
      )}
    </>
  );
};

NavItem.propTypes = {
  currentUrl: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  locale: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItem;
