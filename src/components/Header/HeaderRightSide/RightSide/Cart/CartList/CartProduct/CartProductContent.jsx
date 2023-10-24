import React from 'react';
import st from './CartProduct.module.css';
import CartProductTitle from './CartProductTitle';

const CartProductContent = ({ productPrice, image, title, numberRounding }) => {
  return (
    <div className={st.content}>
      <div className={st.image}><img src={image} alt="" /></div>
      <div className={st.rightContent}>
        <CartProductTitle title={title} />
        <span className={st.price}>{numberRounding(productPrice)}$</span>
      </div>
    </div>
  );
};

export default CartProductContent;