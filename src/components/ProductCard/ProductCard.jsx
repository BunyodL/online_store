import React from 'react';
import Card from '@mui/material/Card';
import { Divider } from '@mui/material';
import CardFooter from './cardFooter/CardFooter';
import CardBody from './cardBody/CardBody';

const ProductCard = ({ productId, title, images, price }) => {
  return (
    <Card>
      <CardBody productId={productId} title={title} images={images} />
      <Divider />
      <CardFooter productId={productId} price={price} />
    </Card>
  );
};

export default ProductCard;
