import { Box, Divider, Tooltip, Typography } from '@mui/material';
import Image from '@components/Image';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import * as Styled from './DesktopRIngStyles.styles';
import translations from './translations';

const DesktopRingStyles = ({ ringStyles }) => (
  <>
    <Box display="flex" gap={2.5} alignItems="center" mt={4}>
      <Box mr={2.5}>
        <Typography variant="bodyMedium">
          <FormattedMessage {...translations.selectTitle} />
        </Typography>
        <Typography variant="h5">
          <FormattedMessage {...translations.styleTitle} />
        </Typography>
      </Box>
      {ringStyles.map(ringStyle => (
        <Tooltip key={ringStyle.label} title={ringStyle.label} placement="bottom">
          <Box lineHeight={0}>
            <NextLink href={ringStyle.link} prefetch={false} passHref>
              <Styled.LinkWrapper>
                <Image alt={ringStyle.image.alt} src={ringStyle.image.url} height={70} width={70} />
              </Styled.LinkWrapper>
            </NextLink>
          </Box>
        </Tooltip>
      ))}
    </Box>
    <Divider sx={{ mt: 2.5 }} />
  </>
);

DesktopRingStyles.propTypes = {
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

DesktopRingStyles.defaultProps = {
  ringStyles: [],
};

export default DesktopRingStyles;
