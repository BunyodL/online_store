import React from 'react';
import Card from '@mui/material/Card';
import { Divider } from '@mui/material';
import CardFooter from './CardFooter/CardFooter';
import CardBasis from './CardBasis';

const ProductCard = ({ productId, title, image, description, rating, price, category, handleProductId }) => {
  return (
    <Card>
      <CardBasis productId={productId} title={title} image={image} handleProductId={handleProductId} />
      <Divider />
      <CardFooter productId={productId} rating={rating} price={price} handleProductId={handleProductId} />
    </Card>
  );
};

export default ProductCard;
