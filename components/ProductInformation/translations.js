import { defineMessages } from 'react-intl';

export default defineMessages({
  regularPrice: {
    id: 'product.regularPrice',
    defaultMessage: 'Regular price: {price}',
    description: 'Label of the regular price on the product page',
  },
  salesPrice: {
    id: 'product.salesPrice',
    defaultMessage: 'Our price: {price} including VAT',
    description: 'Label of the sales price on the product page',
  },
});
