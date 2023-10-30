import React from 'react';
import CartTotalPrice from './CartTotalPrice';
import st from '../../../styles/Cart.module.css';
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';

const CartListFooter = ({ productsInCart }) => {
  return (
    <>
      <Divider />
      <div className={st.footer}>
        <CartTotalPrice productsInCart={productsInCart} />
        <Button
          sx={{ padding: 0.2, fontSize: { lg: 15, md: 14, sm: 12, xs: 7.5 } }}
          size="small"
          variant="contained"
        >
          Go to purchase
        </Button>
      </div>
    </>
  );
};

export default CartListFooter;