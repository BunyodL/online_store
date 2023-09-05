import React from 'react';
import CardActions from '@mui/material/CardActions';
import LeftSideFooter from './LeftSideFooter';
import RightSideFooter from './RightSideFooter';

const CardFooter = ({ productId, rating, price, handleProductId }) => {
  return (
    <CardActions
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 0,
        height: { lg: 80, md: 70, sm: 60, xs: 60 },
        fontSize: { lg: 16, md: 14, sm: 13, xs: 9.5 },
      }}
    >
      <LeftSideFooter rating={rating} price={price} productId={productId} handleProductId={handleProductId} />
      <RightSideFooter rating={rating} />
    </CardActions>
  );
};

export default CardFooter;
