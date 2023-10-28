import React from 'react';
import Card from '@mui/material/Card';
import { Divider } from '@mui/material';
import CardFooter from './CardFooter/CardFooter';
import CardBody from './CardBody/CardBody';
import { setCurrentProductId, setOpenModal } from '../../redux-store/reducers/modal-reducer';
import { useDispatch } from 'react-redux';

const ProductCard = ({ productId, title, image, rating, price }) => {
  const dispatch = useDispatch();
  // getting product id and opening modal window
  const handleOpenModal = (productId) => {
    dispatch(setOpenModal(true));
    dispatch(setCurrentProductId(productId));
  };

  return (
    <Card>
      <CardBody productId={productId} title={title} image={image} handleOpenModal={handleOpenModal} />
      <Divider />
      <CardFooter productId={productId} rating={rating} price={price} handleOpenModal={handleOpenModal} />
    </Card>
  );
};

export default ProductCard;
