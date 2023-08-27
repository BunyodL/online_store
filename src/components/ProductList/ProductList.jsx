import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const ProductList = ({ products, sort }) => {
  const productsOrder = (allProducts, productSort) => {
    switch (productSort) {
      case 'name': {
        return [...allProducts].sort((a, b) => a.title.localeCompare(b.title));
      }
      case 'rating': {
        return [...allProducts].sort((a, b) => b.rating.rate - a.rating.rate);
      }
      case 'count': {
        return [...allProducts].sort((a, b) => b.rating.count - a.rating.count);
      }
      case 'price': {
        return [...allProducts].sort((a, b) => b.price - a.price);
      }
      default:
        return allProducts;
    }
  };

  return (
    <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBlock: 10 }}>
      {productsOrder(products, sort).map(i => (
        <Grid item lg={3} md={4} key={i.id}>
          <ProductCard
            title={i.title}
            image={i.image}
            description={i.description}
            rating={i.rating}
            price={i.price}
            category={i.category}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
