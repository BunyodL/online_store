import React from 'react';
import st from '../../ProductCard.module.css';
import Rating from '@mui/material/Rating';

const CardRating = React.memo(({ rating }) => {
  return (
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
  );
});

export default CardRating;