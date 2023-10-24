import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';
import AlertMessage from '../common/Alert/AlertMessage';
import ModalProductCardContainer from '../ModalProductCard/ModalProductCardContainer';

const ProductList = ({ products, searching, handleOpenModal, handleAddToCart }) => {
  return (
    <>
      {!searching.length && <h1>No products found</h1>}
      <ModalProductCardContainer />
      <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBlock: 10 }}>
        {products.map(i => (
          <Grid item lg={3} md={3} sm={4} xs={6} key={i.id}>
            <ProductCard
              productId={i.id}
              title={i.title}
              image={i.image}
              rating={i.rating}
              price={i.price}
              handleOpenModal={handleOpenModal}
              handleAddToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>
      <AlertMessage />
    </>
  );
};

export default ProductList;
