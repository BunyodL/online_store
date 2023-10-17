import React from 'react';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import st from '../ProductCard.module.css';

const RightSideFooter = ({ rating, productId, handleAddToCart }) => {
  return (
    <div id={st.rightSideId} className={st.rightSide}>
      <div className={st.rating}>
        <span>{rating.rate}</span>
        <Rating
          sx={{
            fontSize: { lg: 17, md: 15, sm: 14, xs: 10 },
          }}
          size="small"
          name="half-rating-read"
          value={rating.rate}
          readOnly
        />
      </div>
      <div className={st.addButton}>
        <Button
          fullWidth
          sx={{
            padding: 0.2,
            fontSize: { lg: 12, md: 11, sm: 9, xs: 7.5 },
            minWidth: '100%',
            width: { lg: 100, md: 95, sm: 80, xs: 60 }
          }}
          size="small"
          variant="contained"
          onClick={() => handleAddToCart(productId)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default RightSideFooter;
