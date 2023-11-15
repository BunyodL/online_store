import React from 'react';
import st from '../../ProductCard.module.css';

const LeftSide = ({ price}) => {
  return (
    <div className={st.leftSide}>
      <div>
        <b>Price:</b> <span>{price}$</span>
      </div>
    </div>
  );
};

export default LeftSide;
