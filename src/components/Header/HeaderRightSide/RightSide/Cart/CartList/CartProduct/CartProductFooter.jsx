import React from 'react';
import st from '../../Cart.module.css';
import plusIcon from '../../../../../../../images/icons8_plus_96.png';
import minusIcon from '../../../../../../../images/icons8_minus_96.png';
import trashIcon from '../../../../../../../images/icons8_trash_96.png';
import { setProductQuantity } from '../../../../../../../redux-store/reducers/products-reducer';
import { useDispatch } from 'react-redux';

const  CartProductFooter = ({ quantity, handleRemoveFromCart, productId }) => {
  const dispatch = useDispatch();
  const handleButtonClick = (e) => {
    dispatch(setProductQuantity({productId, case: e.target.value}));
  };

  return (
    <div className={st.footer}>
      <div className={st.productCount}>
        <button className={st.button} onClick={handleButtonClick} value="+">
          <img src={plusIcon} alt="" />
        </button>
        <div>{quantity}</div>
        <button disabled={quantity === 1} className={st.button} onClick={handleButtonClick} value="-">
          <img src={minusIcon} alt="" />
        </button>
      </div>
      <div>
        <button onClick={() => handleRemoveFromCart(productId)} className={st.button}>
          <img src={trashIcon} alt="" />
        </button>
      </div>
    </div>

  );
};

export default CartProductFooter;