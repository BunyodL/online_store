import React from 'react';
import CartTotalPrice from '../CartTotalPrice';
import st from '../../../../styles/Cart.module.css';
import { Divider } from '@mui/material';
import { useDispatch } from 'react-redux';
import PurchaseButton from './components/PurchaseButton';
import ResetButton from './components/ResetButton';

const CartListFooter = ({ productsInCart, setOpen }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Divider />
      <div className={st.footer}>
        <ResetButton dispatch={dispatch} />
        <CartTotalPrice productsInCart={productsInCart} />
        <PurchaseButton setOpen={setOpen} dispatch={dispatch} />
      </div>
    </>
  );
};

export default CartListFooter;
