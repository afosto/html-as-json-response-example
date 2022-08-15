import { Fragment } from 'react';
import Image from '@components/Image';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const HomeBanner = ({ image, video, title, text, cta }) => (
  <Box position="relative" overflow="hidden" zIndex={0} pt={`${(480 / 1920) * 100}%`}>
    {!video?.length && <Image src={image?.url} alt={image?.alt} layout="fill" objectFit="cover" />}
    {video?.length > 0 && (
      <Box
        component="video"
        poster={image?.url}
        autoPlay
        muted
        loop
        playsInline
        position="absolute"
        top={0}
        left={0}
        zIndex={2}
        height="100%"
      >
        {video.map(({ type, file }) => (
          <source key={file.name} src={file.url} type={`video/${type}`} />
        ))}
      </Box>
    )}
    {(title || text || cta) && (
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={4}
        display={{ xs: 'none', sm: 'flex' }}
        color="common.white"
      >
        <Container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Box>
            <Typography
              variant="h1"
              color="inherit"
              align="center"
              fontSize={{ xs: 24, md: 33 }}
              lineHeight={1.1}
              fontWeight={300}
              letterSpacing={2}
              mb={{ xs: 2, md: 2.5 }}
            >
              {title.split('\n').map(chunk => (
                <Fragment key={chunk}>
                  {chunk} <br />
                </Fragment>
              ))}
            </Typography>
            <Typography
              color="inherit"
              align="center"
              fontSize={{ xs: 18, md: 20 }}
              lineHeight={1.1}
              fontWeight={300}
              letterSpacing={2}
              mb={{ xs: 2, md: 3 }}
            >
              {text}
            </Typography>
            {cta?.length > 0 && (
              <Stack justifyContent="center" direction="row">
                {cta.map(({ label, url }) => (
                  <NextLink href={url} passHref key={url}>
                    <Button component="a" key={label} variant="contained" color="white">
                      {label}
                    </Button>
                  </NextLink>
                ))}
              </Stack>
            )}
          </Box>
        </Container>
      </Box>
    )}
  </Box>
);
HomeBanner.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cta: PropTypes.array,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object,
  text: PropTypes.string,
  title: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  video: PropTypes.array,
};

HomeBanner.defaultProps = {
  cta: [],
  image: undefined,
  text: undefined,
  title: undefined,
  video: [],
};

export default HomeBanner;
