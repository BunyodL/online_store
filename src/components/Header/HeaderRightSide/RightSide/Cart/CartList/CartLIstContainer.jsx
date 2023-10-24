import React from 'react';
import { useProductsSelector } from '../../../../../../core/hooks/useMySelectors';
import CartList from './CartList';
import { useDispatch } from 'react-redux';
import { numberRounding } from './numberRounding';
import {
  removeProductsFromCart,
  setAlert,
  setOpenAlert
} from '../../../../../../redux-store/reducers/products-reducer';

const CartListContainer = ({ open, anchorRef, handleClose }) => {
  const { productsInCart } = useProductsSelector();
  const dispatch = useDispatch();

  const handleAlertMessage = (type, message) => {
    dispatch(setAlert({ type, message }));
  };

  const handleRemoveFromCart = productId => {
    if (productsInCart.some(elem => elem.id === productId)) {
      dispatch(removeProductsFromCart(productId));
      handleAlertMessage('success', 'Product removed from cart!');
      dispatch(setOpenAlert(true));
    }
  };

  return (
    <CartList
      productsInCart={productsInCart}
      open={open}
      handleClose={handleClose}
      anchorRef={anchorRef}
      handleRemoveFromCart={handleRemoveFromCart}
      numberRounding={numberRounding}
    />
  );
};

export default CartListContainer;