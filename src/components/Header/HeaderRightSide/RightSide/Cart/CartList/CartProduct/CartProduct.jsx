import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';
import CartProductContent from './CartProductContent';
import CartProductFooter from './CartProductFooter';
import st from '../../Cart.module.css';

const CartProduct = ({ title, price, image, productId, handleRemoveFromCart, quantity }) => {
  let productPrice = price * quantity;

  return (
    <>
      <MenuItem id={st.menuItem}>
        <CartProductContent title={title} productPrice={productPrice} image={image} />
        <Divider style={{ marginBlock: 5 }} />
        <CartProductFooter handleRemoveFromCart={handleRemoveFromCart} productId={productId} quantity={quantity} />
      </MenuItem>
      <Divider style={{ marginBlock: 5 }} />
    </>
  );
};

export default CartProduct;