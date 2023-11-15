import React from 'react';
import st from '../ProductCard.module.css';
import CardPhoto from './components/CardPhoto';
import CardTitle from './components/CardTitle';
import { NavLink } from 'react-router-dom';

const CardBody = React.memo(({ productId, title, images }) => {
  return (
    <NavLink
      className={st.cardBody}
      to={`${productId}`}
    >
      <CardPhoto title={title} images={images} />
      <CardTitle title={title} />
    </NavLink>
  );
});

export default CardBody;
