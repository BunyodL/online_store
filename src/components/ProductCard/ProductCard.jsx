import React from 'react';
import Card from '@mui/material/Card';
import { Divider } from '@mui/material';
import CardFooter from './CardFooter/CardFooter';
import CardBasis from './CardBasis';

const ProductCard = ({ productId, title, image, rating, price, handleOpenModal, handleAddToCart }) => {
  return (
    <Card>
      <CardBasis productId={productId} title={title} image={image} handleOpenModal={handleOpenModal} />
      <Divider />
      <CardFooter productId={productId} rating={rating} price={price} handleOpenModal={handleOpenModal} handleAddToCart={handleAddToCart} />
    </Card>
  );
};

export default ProductCard;
