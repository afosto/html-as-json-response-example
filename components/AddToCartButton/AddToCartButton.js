import sortArrayByProperty from '@utils/sortArrayByProperty';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';
import { LoadingButton } from '@mui/lab';
import ShoppingBag from '@icons/ShoppingBag';
import translations from './translations';

const AddToCartButton = ({
  fullWidth,
  giftBoxOptions,
  isLoading,
  price,
  productId,
  selectedConfiguration,
}) => {
  const { locale } = useRouter();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const sortedGiftBoxOptions = sortArrayByProperty(giftBoxOptions, 'fromPrice', 'desc');

  const handleAddToCart = async () => {
    try {
      setIsAddingToCart(true);

      const hasConfiguration = selectedConfiguration.length > 0;
      const dbmSelected = hasConfiguration
        ? JSON.stringify(selectedConfiguration)
        : selectedConfiguration;
      const items = [{ product_id: productId }];
      const giftBoxOption = sortedGiftBoxOptions.find(option => price && price >= option.fromPrice);

      let payload = {
        product_id: productId,
        ...(hasConfiguration ? { dbmSelected } : {}),
      };

      if (giftBoxOption) {
        items.push({
          product_id: giftBoxOption.id,
          is_nested: 1,
        });
      }

      if (items.length > 1) {
        payload = {
          items,
          dbmSelected,
        };
      }

      await fetch(`/api/afosto/cart/add?locale=${locale}`, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      const response = await fetch(`/api/afosto/cart?locale=${locale}`);
      const cart = await response.json();
      // eslint-disable-next-line no-console
      console.log(cart);
    } catch (error) {
      // TODO: Do something with error.
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <LoadingButton
      color="secondary"
      variant="contained"
      loading={isLoading || isAddingToCart}
      onClick={handleAddToCart}
      sx={{ justifyContent: 'space-between', mb: 1.5 }}
      fullWidth={fullWidth}
      endIcon={<ShoppingBag />}
    >
      <FormattedMessage {...translations.addToCart} />
    </LoadingButton>
  );
};

AddToCartButton.propTypes = {
  fullWidth: PropTypes.bool,
  giftBoxOptions: PropTypes.arrayOf(
    PropTypes.shape({
      ean: PropTypes.string,
      position: PropTypes.number,
      fromPrice: PropTypes.number,
      item: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  ),
  isLoading: PropTypes.bool,
  price: PropTypes.number,
  productId: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  selectedConfiguration: PropTypes.array,
};

AddToCartButton.defaultProps = {
  giftBoxOptions: [],
  fullWidth: false,
  isLoading: false,
  price: undefined,
  selectedConfiguration: [],
};

export default AddToCartButton;
