import React from 'react';
import st from '../../ProductCard.module.css';
import CardRating from './CardRating';
import AddButton from './AddButton';

const RightSideCardFooter = ({ rating, productId, handleAddToCart }) => {
  return (
    <div id={st.rightSideId} className={st.rightSide}>
      <CardRating rating={rating} />
      <AddButton productId={productId} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default RightSideCardFooter;
