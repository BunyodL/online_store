import React from 'react';
import st from '../../styles/ModalProductCard.module.css';
import { CardActions } from '@mui/material';
import Rating from '@mui/material/Rating';

const ModalFooter = ({ rating, price }) => {
  return (
    <CardActions className={st.modalFooter} sx={{ fontSize: { lg: 22, md: 20, sm: 18, xs: 12 } }}>
      <div className={st.rating}>
        <span>{rating.rate}</span>
        <Rating sx={{ fontSize: { lg: 25, md: 25, sm: 20, xs: 15 } }} name='half-rating-read' value={rating.rate} readOnly />
      </div>
      <div className={st.count}>
        <b>Count:</b> <span>{rating.count}</span>
      </div>
      <div className={st.price}>
        <b>Price:</b> <span>{price}$</span>
      </div>
    </CardActions>
  );
};

export default ModalFooter;
