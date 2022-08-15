import { AngleDown } from '@icons/index';
import {
  Collapse,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import findObjectInArray from '@utils/findObjectInArray';
import isRelativeUri from '@utils/isRelativeUri';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const SiteSettingsSection = ({ title, options, open, onClickSectionHeader, activeOption }) => {
  const activeOptionData = findObjectInArray(options, 'key', activeOption);

  return (
    <>
      <ListSubheader
        sx={{
          px: 4,
          pt: 3,
          pb: 2,
          lineHeight: '24px',
          color: theme => theme.palette.grayGreen[900],
        }}
      >
        {title}
      </ListSubheader>
      <Divider sx={{ borderColor: theme => theme.palette.grayGreen[100] }} />
      <ListItem
        disablePadding
        secondaryAction={
          <IconButton onClick={onClickSectionHeader}>
            <AngleDown
              sx={{
                transform: `rotate(${open ? '180deg' : '0deg'})`,
                transition: theme => theme.transitions.create('transform'),
              }}
            />
          </IconButton>
        }
      >
        <ListItemButton onClick={onClickSectionHeader} sx={{ px: 4, py: 1.5, lineHeight: '24px' }}>
          <ListItemIcon sx={{ minWidth: 'unset', mr: 1.5 }}>{activeOptionData?.icon}</ListItemIcon>
          <ListItemText
            primary={activeOptionData?.label}
            primaryTypographyProps={{ color: 'grayGreen.800' }}
          />
        </ListItemButton>
      </ListItem>
      <Collapse in={open}>
        {options
          .filter(({ key }) => key !== activeOption)
          .map(({ label, icon, key, href, locale }) => {
            if (isRelativeUri(href)) {
              return (
                <NextLink href={href} key={key} passHref {...(locale ? { locale } : {})}>
                  <ListItemButton component="a" sx={{ px: 4, py: 1.5, lineHeight: '24px' }}>
                    <ListItemIcon sx={{ minWidth: 'unset', mr: 1.5 }}>{icon}</ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{ color: 'grayGreen.800' }}
                      primary={label}
                    />
                  </ListItemButton>
                </NextLink>
              );
            }

            return (
              <ListItemButton href={href} key={key} sx={{ px: 4, py: 1.5, lineHeight: '24px' }}>
                <ListItemIcon sx={{ minWidth: 'unset', mr: 1.5 }}>{icon}</ListItemIcon>
                <ListItemText primaryTypographyProps={{ color: 'grayGreen.800' }} primary={label} />
              </ListItemButton>
            );
          })}
      </Collapse>
      <Divider sx={{ borderColor: theme => theme.palette.grayGreen[100] }} />
    </>
  );
};

SiteSettingsSection.propTypes = {
  activeOption: PropTypes.string.isRequired,
  onClickSectionHeader: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default SiteSettingsSection;
