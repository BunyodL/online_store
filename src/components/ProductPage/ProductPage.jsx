import { Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import ProductList from '../ProductList/ProductList';
import Sorting from '../common/Sorting/Sorting';
import Categories from '../common/Sorting/Categories';
import st from './ProductPage.module.css';

const ProductPage = ({ products, errorMessage }) => {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = React.useState([]);
  const [sort, setSort] = React.useState('');

  const handleTextChange = event => {
    setSearchText(event.target.value);
  };

  const handleCategoryChange = event => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleSortChange = event => {
    setSort(event.target.value);
  };

  return (
    <>
      <Container>
        <TextField
          fullWidth
          id='standard-basic'
          label='Search'
          variant='standard'
          sx={{ marginBlock: 2 }}
          onChange={handleTextChange}
          value={searchText}
        />
        {errorMessage ? (
          <h1>{errorMessage}</h1>
        ) : (
          <>
            <div className={st.sorting}>
              <Categories category={category} handleCategoryChange={handleCategoryChange} />
              <Sorting sort={sort} handleSortChange={handleSortChange} />
            </div>
            <ProductList products={products} sort={sort} />
          </>
        )}
      </Container>
    </>
  );
};
export default ProductPage;
