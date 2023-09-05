import React from 'react';
import st from '../ProductCard.module.css';
import Button from '@mui/material/Button';

const LeftSideFooter = ({ rating, price, productId, handleProductId }) => {
  return (
    <div className={st.leftSide}>
      <div className={st.count}>
        <b>Count:</b> <span>{rating.count}</span>
      </div>
      <div className={st.price}>
        <b>Price:</b> <span>{price}$</span>
      </div>
      <div className={st.infoButton}>
        <Button
          fullWidth
          sx={{
            paddingBlock: 0.2,
            paddingInline: 0.5,
            fontSize: { lg: 12, md: 9, sm: 7.5, xs: 6 },
            minWidth: '100%',
          }}
          size='small'
          onClick={() => handleProductId(productId)}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default LeftSideFooter;
