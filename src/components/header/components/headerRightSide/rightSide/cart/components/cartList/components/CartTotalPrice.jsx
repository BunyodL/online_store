import React from 'react';
import st from '../../../styles/Cart.module.css';

const CartTotalPrice = ({ productsInCart }) => {
  const totalPrice = +productsInCart
    .reduce((acc, elem) => acc + elem.price * elem.quantity, 0)
    .toFixed(2);

  const totalPriceWithDiscount = +(totalPrice >= 2500 ? totalPrice * 0.85
    : totalPrice >= 1000 ? totalPrice * 0.95 : totalPrice).toFixed(2);

  return (
    <>
      <div className={st.cartTotalPrice}>
        <span className={st.totalPriceTitle}>
          {totalPrice >= 2500 ? 'Total Price(-15%):'
            : totalPrice >= 1000 ? 'Total Price(-5%):'
              : 'Total Price:'}
        </span>
        <span className={st.price}>
          {' '}
          {totalPriceWithDiscount}$
        </span>
      </div>
    </>
  );
};

export default CartTotalPrice;
