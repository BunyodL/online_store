import React from 'react';
import Card from '@mui/material/Card';
import { Divider } from '@mui/material';
import CardFooter from './CardFooter/CardFooter';
import CardBasis from './CardBasis';
import { useDispatch } from 'react-redux';
import { useProductsSelector } from '../../core/hooks/useMySelectors';
import { setOpenAlert, setProductsToCart } from '../../redux-store/reducers/products-reducer';

const ProductCard = ({
                       productId,
                       title,
                       image,
                       rating,
                       price,
                       handleProductId,
                       handleAddToCart,
                     }) => {

  return (
    <Card>
      <CardBasis productId={productId} title={title} image={image} handleProductId={handleProductId} />
      <Divider />
      <CardFooter productId={productId} rating={rating} price={price} handleProductId={handleProductId}
                  handleAddToCart={handleAddToCart} />
    </Card>
  );
};

export default ProductCard;
