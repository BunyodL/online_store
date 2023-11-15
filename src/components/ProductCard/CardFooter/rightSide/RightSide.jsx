import React from 'react';
import st from '../../ProductCard.module.css';
import AddButton from './components/AddButton';

const RightSide = ({ productId, handleAddToCart }) => {
  return (
    <div id={st.rightSideId} className={st.rightSide}>
      <AddButton productId={productId} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default RightSide;
