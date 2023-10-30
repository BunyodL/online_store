import React from 'react';
import st from '../ProductCard.module.css';
import CardPhoto from './components/CardPhoto';
import CardTitle from './components/CardTitle';

const CardBody = React.memo(({ productId, title, image, handleOpenModal }) => {
  return (
    <div className={st.cardBasis} onClick={() => handleOpenModal(productId)}>
      <CardPhoto title={title} image={image} />
      <CardTitle title={title} />
    </div>
  );
});

export default CardBody;
