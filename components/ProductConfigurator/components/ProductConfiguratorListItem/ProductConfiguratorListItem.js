import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import AngleDown from '@icons/AngleDown';
import AngleUp from '@icons/AngleUp';
import { Collapse, Divider, ListItemText } from '@mui/material';
import AngleRight from '@icons/AngleRight';
import DiamondShapes from '@icons/DiamondShapes';
import * as Styled from './ProductConfiguratorListItem.styles';

const ProductConfiguratorListItem = ({
  active,
  children,
  collapse,
  description,
  divider,
  Icon,
  onClick,
  option,
  title,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const CollapseIcon = active ? AngleUp : AngleDown;
  const showDivider = divider || !option.lastOption || (collapse && active) || isTransitioning;
  const showCollapseDivider = collapse && active && !option.lastOption;
  const IconComponent = collapse ? CollapseIcon : Icon;

  const handleClick = () => {
    if (onClick && typeof onClick === 'function') {
      onClick();
    }

    if (collapse) {
      setIsTransitioning(true);
    }
  };

  const handleCloseCollapse = () => {
    setIsTransitioning(false);
  };

  return (
    <>
      <Styled.ListItemButton onClick={handleClick} divider={showDivider}>
        <ListItemText
          primary={title || option.label}
          secondary={description || option.selected?.label || '-'}
          primaryTypographyProps={{ variant: 'bodyMediumMedium' }}
          secondaryTypographyProps={{ color: 'grayGreen.600' }}
        />
        {option.option === 'stone_size' && (
          <DiamondShapes
            sx={{
              fontSize: 24,
            }}
          />
        )}
        {option.option !== 'stone_size' && option.selected?.img && (
          <Image src={option.selected.img} height={24} width={24} />
        )}
        <IconComponent sx={{ fontSize: 20, ml: 3 }} />
      </Styled.ListItemButton>
      {collapse && (
        <Collapse in={active} onExited={handleCloseCollapse}>
          {children}
          {showCollapseDivider && <Divider />}
        </Collapse>
      )}
    </>
  );
};

ProductConfiguratorListItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  collapse: PropTypes.bool,
  description: PropTypes.string,
  divider: PropTypes.bool,
  Icon: PropTypes.elementType,
  onClick: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  option: PropTypes.object.isRequired,
  title: PropTypes.string,
};

ProductConfiguratorListItem.defaultProps = {
  active: false,
  children: undefined,
  collapse: false,
  description: undefined,
  divider: undefined,
  Icon: AngleRight,
  onClick: undefined,
  title: undefined,
};

export default ProductConfiguratorListItem;
