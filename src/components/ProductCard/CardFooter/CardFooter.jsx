import React from 'react';
import CardActions from '@mui/material/CardActions';
import LeftSide from './leftSide/LeftSide';
import RightSide from './rightSide/RightSide';
import { setProductsToCart } from '../../../redux-store/reducers/products-reducer';
import { useDispatch } from 'react-redux';
import { useProductsSelector } from '../../../core/hooks/useMySelectors';
import { handleAlertMessage } from '../../common/alert/handleAlertMessage';

const CardFooter = ({ productId, price }) => {
  const dispatch = useDispatch();
  const { productsInCart } = useProductsSelector();

  // adding product to the cart and showing alert
  const handleAddToCart = (productId) => {
    if (!productsInCart.some((elem) => elem.id === productId)) {
      dispatch(setProductsToCart({ productId, quantity: 1 }));
      handleAlertMessage('success', 'Product added to cart!', dispatch);
    } else {
      handleAlertMessage('warning', 'This product is already in the cart!', dispatch);
    }
  };

  return (
    <CardActions
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 0,
        marginTrim: 0,
        height: { lg: 80, md: 70, sm: 60, xs: 60 },
        fontSize: { lg: 18, md: 17, sm: 15, xs: 10 },
      }}
    >
      <LeftSide price={price} />
      <RightSide productId={productId} handleAddToCart={handleAddToCart} />
    </CardActions>
  );
};

export default CardFooter;
