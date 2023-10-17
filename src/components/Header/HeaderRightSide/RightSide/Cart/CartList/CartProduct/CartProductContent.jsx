import React from 'react';
import st from '../../Cart.module.css';
import CartProductTitle from './CartProductTitle';

const CartProductContent = ({ productPrice, image, title }) => {
  const numberRounding = (num) => {
    let num1 = Number(num)
    if (Number.isInteger(num1)) {
      return num1
    }
    let priceNum = num1.toFixed(2);
    if (priceNum[priceNum.length - 1] === '0') {
      const priceNum1 = Number(priceNum)
      return priceNum1.toFixed(1)
    }
    return priceNum
  }

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