import React from 'react';
import st from '../../ProductCard.module.css';
import Button from '@mui/material/Button';
import InfoButton from './InfoButton';

const LeftSideCardFooter = ({ price, productId, handleOpenModal }) => {
  return (
    <div className={st.leftSide}>
      <div>
        <b>Price:</b> <span>{price}$</span>
      </div>
      <InfoButton productId={productId} handleOpenModal={handleOpenModal} />
    </div>
  );
};

export default LeftSideCardFooter;
