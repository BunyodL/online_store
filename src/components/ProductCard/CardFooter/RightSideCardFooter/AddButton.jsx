import React from 'react';
import st from '../../ProductCard.module.css';
import Button from '@mui/material/Button';

const AddButton = ({ handleAddToCart, productId }) => {
  return (
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
  );
};

export default AddButton;