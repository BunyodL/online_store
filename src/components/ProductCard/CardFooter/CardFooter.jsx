import React from 'react';
import CardActions from '@mui/material/CardActions';
import LeftSideFooter from './LeftSideFooter';
import RightSideFooter from './RightSideFooter';

const CardFooter = ({ productId, rating, price, handleProductId, handleAddToCart }) => {
  return (
    <CardActions
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 0,
        marginTrim: 0,
        height: { lg: 80, md: 70, sm: 60, xs: 60 },
        fontSize: { lg: 18, md: 17, sm: 15, xs: 10 },
      }}
    >
      <LeftSideFooter rating={rating} price={price} productId={productId} handleProductId={handleProductId} />
      <RightSideFooter rating={rating} productId={productId} handleAddToCart={handleAddToCart} />
    </CardActions>
  );
};

export default CardFooter;
