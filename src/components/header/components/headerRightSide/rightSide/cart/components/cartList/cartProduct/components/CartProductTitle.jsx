import React from 'react';
import st from '../styles/CartProduct.module.css';

const CartProductTitle = React.memo(({ title }) => {
  const titleLength = 21;
  // if title length greater than 21 symbols, after 21th symbol we add 3 points(...)
  const handleTitleLength = (title) => {
    const myTitle = title.split('', titleLength);
    for (let i = 0; i < 3; i++) {
      myTitle[myTitle.length] = '.';
    }
    return myTitle.join('');
  };

  return (
    <div className={st.title}>
      {title.length < titleLength ? title : handleTitleLength(title)}
    </div>
  );
});

export default CartProductTitle;