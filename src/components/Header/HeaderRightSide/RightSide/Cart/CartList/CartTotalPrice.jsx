import React from 'react';
import st from '../Cart.module.css';

const CartTotalPrice = ({ productsInCart }) => {
  const totalPrice =
    +productsInCart.reduce((acc, elem) =>
      acc + elem.price * elem.quantity, 0).toFixed(2);

  const totalPriceWithDiscount = +(totalPrice * 0.95).toFixed(2);

  return (
    <>
      <div className={st.cartTotalPrice}>
        <span className={st.totalPriceTitle}>
          {totalPrice < 1000 ? 'Total Price:' : 'Total Price(-5%):'}
        </span>
        <span className={st.price}> {totalPrice < 1000 ? totalPrice : totalPriceWithDiscount}$</span>
      </div>
    </>
  );
};

export default CartTotalPrice;