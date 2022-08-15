import Currency from '@components/Currency';
import DiamondShapes from '@icons/DiamondShapes';
import isDefined from '@utils/isDefined';
import React from 'react';
import NextLink from 'next/link';
import Image from '@components/Image';
import * as Styled from '@components/ProductCard/ProductCard.styles';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const {
    currency = 'EUR',
    defaultImage,
    hasDiscount = false,
    multipleSizesAvailable = false,
    name,
    nameSpecificationParts = [],
    originalPrice,
    price,
    url,
  } = product;

  return (
    <Styled.Container component="article">
      <NextLink href={url} prefetch={false} passHref>
        <Styled.ActionArea>
          {multipleSizesAvailable && (
            <DiamondShapes
              sx={{
                color: 'grey.500',
                fontSize: 28,
                position: 'absolute',
                right: 16,
                top: 16,
                zIndex: 1,
              }}
            />
          )}
          {defaultImage && (
            // eslint-disable-next-line jsx-a11y/alt-text
            <Image alt={name} src={defaultImage.thumbs[400]} width={400} height={400} />
          )}
          <Typography variant="bodyMedium" fontWeight="bold" textAlign="center" sx={{ mb: 1 }}>
            {nameSpecificationParts.length > 0 &&
              nameSpecificationParts.map(part => (
                <React.Fragment key={part}>
                  {part}
                  <br />
                </React.Fragment>
              ))}
            {!nameSpecificationParts.length && name}
          </Typography>
          <div>
            {hasDiscount && (
              <Typography
                color="grey.600"
                component="span"
                variant="bodySmall"
                mr={1.5}
                sx={{ textDecoration: 'line-through' }}
              >
                <Currency currency={currency} value={originalPrice} />
              </Typography>
            )}
            {isDefined(price) && (
              <Typography component="span" variant="bodyMedium">
                <Currency currency={currency} value={price} />
              </Typography>
            )}
          </div>
        </Styled.ActionArea>
      </NextLink>
    </Styled.Container>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    currency: PropTypes.string,
    defaultImage: PropTypes.shape({
      filename: PropTypes.string,
      thumbs: PropTypes.shape({
        50: PropTypes.string,
        100: PropTypes.string,
        200: PropTypes.string,
        400: PropTypes.string,
      }),
    }),
    hasDiscount: PropTypes.bool,
    multipleSizesAvailable: PropTypes.bool,
    name: PropTypes.string,
    nameSpecificationParts: PropTypes.arrayOf(PropTypes.string),
    originalPrice: PropTypes.number,
    price: PropTypes.number,
    url: PropTypes.string,
  }),
};

ProductCard.defaultProps = {
  product: {},
};

export default ProductCard;
