import React from 'react';
import st from '../ProductCard.module.css';
import Button from '@mui/material/Button';

const LeftSideFooter = ({ rating, price, productId, handleProductId }) => {
  return (
    <div className={st.leftSide}>
      <div>
        <b>Price:</b> <span>{price}$</span>
      </div>
      <div>
        <Button
          fullWidth
          sx={{
            paddingBlock: 0.2,
            paddingInline: 0.5,
            fontSize: { lg: 13, md: 12, sm: 10, xs: 8 },
            minWidth: '100%',
            width: { lg: 105, md: 100, sm: 80, xs: 70 }
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
