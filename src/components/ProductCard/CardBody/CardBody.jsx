import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import st from '../ProductCard.module.css';
import CardPhoto from './CardPhoto';
import CardTitle from './CardTitle';

const CardBody = React.memo(({ productId, title, image, handleOpenModal }) => {
  return (
    <div className={st.cardBasis} onClick={() => handleOpenModal(productId)}>
      <CardPhoto title={title} image={image} />
      <CardTitle title={title} />
    </div>
  );
});

export default CardBody;
