import Image from '@components/Image';
import AngleRight from '@icons/AngleRight';
import ShoppingBag from '@icons/ShoppingBag';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Card, CardContent, Dialog, Link, Typography } from '@mui/material';
import { PrismicRichText } from '@prismicio/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import translations from './translations';

const DummyRing = ({
  onChangeConfiguration,
  option,
  productId,
  cardTitle,
  cardText,
  cardMoreInfoLabel,
  cardMoreInfoLink,
  dialogImage,
  dialogTitle,
  dialogText,
}) => {
  const intl = useIntl();
  const { locale } = useRouter();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showDummyRingModal, setShowDummyRingModal] = useState(false);

  const handleCloseDummyRingModal = () => {
    setShowDummyRingModal(false);
  };

  const handleOpenDummyRingModal = () => {
    setShowDummyRingModal(true);
  };

  const handleAddDummyRingToCart = async () => {
    try {
      setIsAddingToCart(true);

      const [optionValue] = option?.values || [];
      const selected = {
        option: option.option,
        option_label: option.option,
        label: optionValue.label,
        value: optionValue?.value,
        selected: [],
      };
      let selectedConfiguration = [];

      if (onChangeConfiguration && typeof onChangeConfiguration === 'function') {
        selectedConfiguration = await onChangeConfiguration([selected], { skipUpdateState: true });
      }

      const hasConfiguration = selectedConfiguration?.selected.length > 0;
      const dbmSelected = hasConfiguration ? JSON.stringify(selectedConfiguration.selected) : null;

      await fetch(`/api/afosto/cart/add?locale=${locale}`, {
        method: 'POST',
        body: JSON.stringify({
          product_id: productId,
          ...(hasConfiguration ? { dbmSelected } : {}),
        }),
      });
    } catch (error) {
      // TODO: Do something with error.
    } finally {
      setShowDummyRingModal(false);
      setIsAddingToCart(false);
    }
  };

  return (
    <>
      <Card sx={{ backgroundColor: 'grey.100', mt: 8 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography component="div" variant="bodyMediumExtraLarge" fontWeight={900}>
            {intl.formatMessage(translations.new).toUpperCase()}!
          </Typography>
          <Typography component="div" variant="h2" fontWeight={400} sx={{ mb: 1.5, mt: 2 }}>
            {cardTitle}
          </Typography>
          <Typography variant="bodyMedium">{cardText}</Typography>
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            onClick={handleOpenDummyRingModal}
            endIcon={<AngleRight />}
            sx={{
              justifyContent: 'space-between',
              mb: 1.5,
              mt: 2.5,
            }}
            fullWidth
          >
            <FormattedMessage {...translations.addToCart} />
          </Button>
          <NextLink href={cardMoreInfoLink} passHref>
            <Link variant="bodyMedium" underline="always" color="inherit">
              {cardMoreInfoLabel}
            </Link>
          </NextLink>
        </CardContent>
      </Card>
      <Dialog open={showDummyRingModal} fullWidth maxWidth="md" onClose={handleCloseDummyRingModal}>
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)">
          <Box position="relative">
            <Image
              src={dialogImage?.url}
              width={dialogImage?.dimensions?.width}
              height={dialogImage?.dimensions?.height}
              alt={dialogImage?.alt}
              objectPosition="left"
              layout="fill"
            />
          </Box>
          <Box display="flex" flexDirection="column" p={4}>
            <Typography variant="h3" component="div">
              {dialogTitle}
            </Typography>
            <PrismicRichText field={dialogText} />
            <LoadingButton
              variant="contained"
              color="secondary"
              startIcon={<ShoppingBag />}
              onClick={handleAddDummyRingToCart}
              loading={isAddingToCart}
              sx={{ mx: 'auto', mt: 4 }}
            >
              <FormattedMessage {...translations.addToCart} />
            </LoadingButton>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

DummyRing.propTypes = {
  onChangeConfiguration: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  option: PropTypes.object.isRequired,
  productId: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
  cardMoreInfoLabel: PropTypes.string.isRequired,
  cardMoreInfoLink: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  dialogImage: PropTypes.object.isRequired,
  dialogTitle: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  dialogText: PropTypes.arrayOf(PropTypes.object).isRequired,
};

DummyRing.defaultProps = {
  onChangeConfiguration: undefined,
};

export default DummyRing;
