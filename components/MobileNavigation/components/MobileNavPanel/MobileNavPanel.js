import AngleLeft from '@icons/AngleLeft';
import BookOpen from '@icons/BookOpen';
import { ShippingFast } from '@icons/index';
import InfoSquare from '@icons/InfoSquare';
import User from '@icons/User';
import Users from '@icons/Users';
import { Box, Slide } from '@mui/material';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import MobileNavItem from '../MobileNavItem';
import * as Styled from './MobileNavPanel.styles';
import { BackLinkItemText } from './MobileNavPanel.styles';
import translations from './translations';

const getServiceMenuIcon = label => {
  switch (label.toLowerCase()) {
    case 'inloggen / registreren':
      return <User sx={{ mr: 2.5, ml: -0.5 }} />;
    case 'over diamondsbyme':
      return <Users sx={{ mr: 2.5, ml: -0.5 }} />;
    case 'veel gestelde vragen':
      return <InfoSquare sx={{ mr: 2.5, ml: -0.5 }} />;
    case 'education center':
      return <BookOpen sx={{ mr: 2.5, ml: -0.5 }} />;
    case 'klantenservice':
      return <InfoSquare sx={{ mr: 2.5, ml: -0.5 }} />;
    default:
      return null;
  }
};

const MobileNavPanel = ({
  items,
  parent,
  active,
  onTraverse,
  secondaryMenu,
  showAllLink,
  panel,
}) => {
  const intl = useIntl();

  return (
    <Slide in={active} appear={false} direction="left" unmountOnExit mountOnEnter>
      <Styled.Base>
        <Styled.List disablePadding>
          {parent && (
            <Styled.BackLinkItem disablePadding>
              <Styled.BackLinkItemButton onClick={onTraverse(parent.id)}>
                <BackLinkItemText
                  primary={
                    <Box display="flex" alignItems="center" gap={0.5}>
                      <AngleLeft sx={{ fontSize: 20 }} />
                      {intl.formatMessage(translations.backToLinkLabel, { label: parent.label })}
                    </Box>
                  }
                  primaryTypographyProps={{ variant: 'bodyMedium' }}
                />
              </Styled.BackLinkItemButton>
            </Styled.BackLinkItem>
          )}
          {items.map(item => (
            <MobileNavItem
              label={item.label}
              href={item.url}
              onTraverse={onTraverse}
              id={item.id}
              key={item.id}
              hasChildren={item.items.length > 0}
              icon={item.icon}
              locale={item?.iso}
            />
          ))}
          {showAllLink && (
            <MobileNavItem
              label={intl.formatMessage(translations.allLinkLabel, {
                label: panel.label.toLowerCase(),
              })}
              href={panel.url}
              id={panel.id}
              key={panel.id}
              icon={panel.icon}
              locale={panel?.iso}
              isAllLink
            />
          )}
          {!parent && (
            <>
              <Styled.Spacer />
              <MobileNavItem
                label={intl.formatMessage(translations.expressCollectionItemLabel)}
                description={intl.formatMessage(translations.expressCollectionItemDescription)}
                href="/express"
                id="express"
                key="express"
                icon={<ShippingFast sx={{ mr: 2.5, ml: -0.5, alignSelf: 'flex-start' }} />}
                locale={panel?.iso}
                showAngle
              />
            </>
          )}
          {secondaryMenu.length > 0 && (
            <>
              <Styled.Spacer />
              {secondaryMenu.map(item => (
                <NextLink href={item.url} passHref key={item.id} prefetch={false}>
                  <MobileNavItem
                    label={item.label}
                    onTraverse={onTraverse}
                    id={item.id}
                    icon={getServiceMenuIcon(item.label)}
                  />
                </NextLink>
              ))}
            </>
          )}
        </Styled.List>
      </Styled.Base>
    </Slide>
  );
};

MobileNavPanel.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array,
  onTraverse: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  parent: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  panel: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  secondaryMenu: PropTypes.object,
  showAllLink: PropTypes.bool,
};

MobileNavPanel.defaultProps = {
  active: false,
  id: undefined,
  items: [],
  onTraverse: undefined,
  parent: undefined,
  panel: undefined,
  secondaryMenu: {},
  showAllLink: false,
};

export default MobileNavPanel;
