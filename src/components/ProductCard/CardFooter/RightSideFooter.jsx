import React from 'react';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import st from '../ProductCard.module.css';

const RightSideFooter = ({ rating, productId, handleAddToCart }) => {
  return (
    <div className={st.rightSide}>
      <div className={st.rating}>
        <span>{rating.rate}</span>
        <Rating
          sx={{
            fontSize: { lg: 15, md: 13, sm: 11, xs: 9 },
          }}
          size='small'
          name='half-rating-read'
          value={rating.rate}
          readOnly
        />
      </div>
      <div className={st.addButton}>
        <Button
          fullWidth
          sx={{
            padding: 0.2,
            fontSize: { lg: 12, md: 9, sm: 7.5, xs: 6 },
            minWidth: '100%',
          }}
          size='small'
          variant='contained'
          onClick={() => handleAddToCart(productId)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default RightSideFooter;
