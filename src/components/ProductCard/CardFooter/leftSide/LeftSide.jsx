import React from 'react';
import st from '../../ProductCard.module.css';
import InfoButton from './components/InfoButton';

const LeftSide = ({ price, productId, handleOpenModal }) => {
  return (
    <div className={st.leftSide}>
      <div>
        <b>Price:</b> <span>{price}$</span>
      </div>
      <InfoButton productId={productId} handleOpenModal={handleOpenModal} />
    </div>
  );
};

export default LeftSide;
