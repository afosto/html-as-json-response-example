import AngleDown from '@icons/AngleDown';
import AngleUp from '@icons/AngleUp';
import { Button, ClickAwayListener, Typography } from '@mui/material';
import Image from '@components/Image';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import * as Styled from './MobileRingStyles.styles';
import translations from './translations';

const MobileRingStyles = ({ ringStyles }) => {
  const anchorEl = useRef();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const EndIcon = open ? AngleUp : AngleDown;

  return (
    <>
      <Button
        endIcon={<EndIcon sx={{ color: 'grey.500' }} />}
        variant="outlined"
        color="grayGreen"
        size="small"
        onClick={handleClick}
        ref={anchorEl}
        sx={{ justifyContent: 'space-between' }}
        fullWidth
      >
        <Typography variant="buttonSmall" fontWeight="bold">
          <FormattedMessage {...translations.selectStylePlaceholder} />
        </Typography>
      </Button>
      <Styled.Popover
        anchorEl={anchorEl.current}
        open={open}
        onClose={handleClose}
        sx={{ width: '100%' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Styled.PopperInnerContainer>
            {ringStyles.map(ringStyle => (
              <NextLink key={ringStyle.label} href={ringStyle.link} prefetch={false} passHref>
                <Styled.MenuItem onClick={handleClose} divider>
                  <Image
                    alt={ringStyle.image.alt}
                    src={ringStyle.image.url}
                    width={50}
                    height={50}
                  />
                  <Typography variant="bodyMedium">{ringStyle.label}</Typography>
                </Styled.MenuItem>
              </NextLink>
            ))}
          </Styled.PopperInnerContainer>
        </ClickAwayListener>
      </Styled.Popover>
    </>
  );
};

MobileRingStyles.propTypes = {
  ringStyles: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      image: PropTypes.shape({
        alt: PropTypes.string,
        url: PropTypes.string,
      }),
      link: PropTypes.string,
    }),
  ),
};

MobileRingStyles.defaultProps = {
  ringStyles: [],
};

export default MobileRingStyles;
