import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';
import CartProductContent from './components/CartProductContent';
import CartProductFooter from './components/CartProductFooter';
import st from './styles/CartProduct.module.css';

const CartProduct = ({
  title,
  price,
  images,
  productId,
  handleRemoveFromCart,
  quantity,
  numberRounding,
}) => {
  let productPrice = price * quantity;

  return (
    <>
      <MenuItem id={st.menuItem}>
        <CartProductContent
          title={title}
          productPrice={productPrice}
          image={images[0]}
          numberRounding={numberRounding}
        />
        <Divider />
        <CartProductFooter
          handleRemoveFromCart={handleRemoveFromCart}
          productId={productId}
          quantity={quantity}
        />
      </MenuItem>
      <Divider style={{ margin: 0 }} />
    </>
  );
};

export default CartProduct;
