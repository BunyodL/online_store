import React from 'react';
import st from '../../styles/ModalProductCard.module.css';
import { CardActions } from '@mui/material';
import Rating from '@mui/material/Rating';

const ModalFooter = ({ price }) => {
  return (
    <CardActions className={st.modalFooter} sx={{ fontSize: { lg: 22, md: 20, sm: 18, xs: 12 } }}>
      <div className={st.price}>
        <b>Price:</b> <span>{price}$</span>
      </div>
    </CardActions>
  );
};

export default ModalFooter;
