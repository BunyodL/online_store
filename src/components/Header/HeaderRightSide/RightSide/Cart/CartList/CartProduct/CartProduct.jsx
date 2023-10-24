import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';
import CartProductContent from './CartProductContent';
import CartProductFooter from './CartProductFooter';
import st from './CartProduct.module.css';

const CartProduct = ({ title, price, image, productId, handleRemoveFromCart, quantity, numberRounding }) => {
  let productPrice = price * quantity;

  return (
    <>
      <MenuItem id={st.menuItem}>
        <CartProductContent title={title} productPrice={productPrice} image={image} numberRounding={numberRounding} />
        <Divider />
        <CartProductFooter handleRemoveFromCart={handleRemoveFromCart} productId={productId} quantity={quantity} />
      </MenuItem>
      <Divider style={{ margin: 0 }} />
    </>
  );
};

export default CartProduct;