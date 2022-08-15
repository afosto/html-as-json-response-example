import AngleRight from '@icons/AngleRight';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
// import NextLink from 'next/link';
import afosto from '../../../../afosto.config';
import * as Styled from './MobileNavItem.styles';

const MobileNavItem = ({
  onTraverse,
  href,
  id,
  label,
  description,
  hasChildren,
  icon,
  // locale,
  isAllLink,
  showAngle,
}) => {
  const { locale: lang } = useRouter();
  return (
    <Styled.Item
      key={id}
      disablePadding
      className={clsx({ 'with-divider': href !== 'column', 'all-link': isAllLink })}
    >
      {hasChildren && (
        <Styled.ItemButton onClick={onTraverse(id)}>
          {icon && icon}
          <Styled.ItemText
            primary={label}
            primaryTypographyProps={{ variant: 'bodyMedium' }}
            secondary={description}
          />
          <AngleRight />
        </Styled.ItemButton>
      )}
      {!hasChildren && (
        // <NextLink href={href} passHref locale={locale} prefetch={false}>
        <Styled.ItemButton
          component="a"
          href={
            !href.includes('.diamondsbyme.')
              ? `${afosto.localeDomains[lang].replace(/\/$/, '')}${href}`
              : href
          }
        >
          {icon && icon}
          <Styled.ItemText
            primary={label}
            primaryTypographyProps={{ variant: description ? 'bodyLarge' : 'bodyMedium' }}
            secondary={description}
            secondaryTypographyProps={{ variant: 'bodyMedium', color: 'grayGreen.600' }}
          />
          {showAngle && <AngleRight />}
        </Styled.ItemButton>
        // </NextLink>
      )}
    </Styled.Item>
  );
};

MobileNavItem.propTypes = {
  hasChildren: PropTypes.bool,
  href: PropTypes.string,
  id: PropTypes.string,
  description: PropTypes.string,
  isAllLink: PropTypes.bool,
  label: PropTypes.string,
  // locale: PropTypes.string,
  onTraverse: PropTypes.func,
  icon: PropTypes.node,
  showAngle: PropTypes.bool,
};

MobileNavItem.defaultProps = {
  hasChildren: false,
  href: undefined,
  id: undefined,
  description: undefined,
  isAllLink: false,
  label: undefined,
  // locale: undefined,
  onTraverse: undefined,
  icon: undefined,
  showAngle: false,
};

export default MobileNavItem;
