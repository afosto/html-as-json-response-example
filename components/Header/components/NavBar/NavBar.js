import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, Container, Link, Portal } from '@mui/material';
import sortArrayByProperty from '@utils/sortArrayByProperty';
// import NextLink from 'next/link';
import afosto from '../../../../afosto.config';
import * as Styled from './NavBar.styles';

const NavBar = ({ menuItems }) => {
  const { locale } = useRouter();
  const [subMenu, setSubMenu] = useState(null);
  const localeDomain = afosto.localeDomains[locale] || afosto.defaultDomain;

  const handleClick = () => {
    setSubMenu(null);
  };

  const handleMouseOver = id => () => {
    setSubMenu(id);
  };
  const handleMouseOut = () => {
    setSubMenu(null);
  };

  const hoverProps = id => ({
    onMouseEnter: handleMouseOver(id),
    onMouseLeave: handleMouseOut,
  });

  return (
    <Styled.Wrapper>
      <Container
        sx={{
          display: {
            xs: 'none',
            md: 'block',
          },
        }}
      >
        <Styled.Menu>
          {menuItems.map(menuItem => (
            <Styled.Item
              key={menuItem.id}
              className={clsx({ active: menuItem.id === subMenu })}
              {...(menuItem.items && Object.values(menuItem.items || []).length > 0
                ? hoverProps(menuItem.id)
                : {})}
            >
              {/* <NextLink */}
              {/*  href={menuItem.url.replace(localeDomain, '/')} */}
              {/*  passHref */}
              {/*  key={menuItem.title} */}
              {/*  prefetch={false} */}
              {/* > */}
              <Link
                color="inherit"
                noWrap
                variant="bodyMedium"
                sx={{ flexShrink: 0 }}
                title={menuItem.title}
                onClick={handleClick}
                underline="none"
                href={menuItem.url}
              >
                {menuItem.title}
              </Link>
              {/* </NextLink> */}
              {menuItem.items && Object.values(menuItem.items || []).length > 0 && (
                <Styled.SubMenu className="nav-sub-menu">
                  <Container>
                    <Styled.SubMenuMenu>
                      {sortArrayByProperty(Object.values(menuItem.items || []), 'position').map(
                        columnItem =>
                          Object.values(columnItem.items).length > 0 ? (
                            <Styled.SubMenuMenuList key={columnItem.id}>
                              {sortArrayByProperty(
                                Object.values(columnItem.items || []),
                                'position',
                              ).map(subitem => (
                                <Styled.Item key={subitem.id}>
                                  {/* <NextLink */}
                                  {/*  href={subitem.url} */}
                                  {/*  prefetch={false} */}
                                  {/*  passHref */}
                                  {/* > */}
                                  <Link
                                    color="inherit"
                                    href={
                                      !subitem.url.includes(localeDomain)
                                        ? `${localeDomain.replace(/\/$/, '')}${subitem.url}`
                                        : subitem.url
                                    }
                                    noWrap
                                    variant="bodyMedium"
                                    title={subitem.title}
                                    onClick={handleClick}
                                    underline="none"
                                  >
                                    {subitem.label.split('|')[0]}
                                  </Link>
                                  {/* </NextLink> */}
                                </Styled.Item>
                              ))}
                            </Styled.SubMenuMenuList>
                          ) : null,
                      )}
                    </Styled.SubMenuMenu>
                  </Container>
                </Styled.SubMenu>
              )}
            </Styled.Item>
          ))}
        </Styled.Menu>
      </Container>
      <Portal>
        <Backdrop open={!!subMenu} />
      </Portal>
    </Styled.Wrapper>
  );
};

NavBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  menuItems: PropTypes.array,
};

NavBar.defaultProps = {
  menuItems: [],
};

export default NavBar;
