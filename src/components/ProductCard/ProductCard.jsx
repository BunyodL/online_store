import React from 'react';
import Card from '@mui/material/Card';
import { Divider } from '@mui/material';
import CardFooter from './CardFooter/CardFooter';
import CardBasis from './CardBasis';
import { useDispatch } from 'react-redux';
import { useCartSelector } from '../../core/hooks/useMySelectors';
import { setOpenAlert } from '../../redux-store/reducers/products-reducer';

const ProductCard = ({
                       productId,
                       title,
                       image,
                       rating,
                       price,
                       handleProductId,
                       handleAlertMessage,
                       setProductsInCart
                     }) => {

  const { productsInCart, errorMessage } = useCartSelector();
  const dispatch = useDispatch();

  // adding product to the cart and showing alert
  const handleAddToCart = productId => {
    if (!productsInCart.some(elem => elem.id === productId)) {
      dispatch(setProductsInCart(productId));
      if (errorMessage) {
        handleAlertMessage('error', errorMessage);
      } else {
        handleAlertMessage('success', 'Product added to cart!');
      }
    } else {
      handleAlertMessage('warning', 'This product is already in the cart!');
    }
    dispatch(setOpenAlert(true));
  };

  // const handleRemoveFromCart = productId => {
  //   if (!productsInCart.some(elem => elem.id === productId)) {
  //     dispatch(setProductsInCart(productId));
  //     if (errorMessage) {
  //       handleAlertMessage('error', errorMessage);
  //     } else {
  //       handleAlertMessage('success', 'Product removed from cart!');
  //     }
  //     dispatch(setOpenAlert(true));
  //   }
  //   if (!productsInCart.length) {
  //     'No products added to cart'
  //   }
  // };

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
