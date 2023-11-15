import React from 'react';
import CartList from './components/CartList';
import { useDispatch } from 'react-redux';
import { numberRounding } from './numberRounding';
import { removeProductsFromCart } from '../../../../../../../../redux-store/reducers/products-reducer';
import { useProductsSelector } from '../../../../../../../../core/hooks/useMySelectors';
import { handleAlertMessage } from '../../../../../../../common/alert/handleAlertMessage';

const CartListContainer = ({ open, anchorRef, handleClose, setOpen }) => {
  const { productsInCart } = useProductsSelector();
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    if (productsInCart.some((elem) => elem.id === productId)) {
      dispatch(removeProductsFromCart(productId));
      handleAlertMessage('success', 'Product removed from cart!', dispatch);
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
      setOpen={setOpen}
    />
  );
};

export default CartListContainer;
