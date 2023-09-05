import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import ProductList from '../ProductList/ProductList';
import { useDispatch } from 'react-redux';
import { useProductsSelector } from '../../core/hooks/useMySelectors';
import CategoriesAndSorting from '../common/CategoriesAndSorting/CategoriesAndSorting';
import { filterCategories } from '../common/CategoriesAndSorting/Categories/filterCategories';
import MyTextField from '../common/MyTextField/MyTextField';

const ProductPage = ({ setSearchText, setCategory, setSort, setProductsCategories, getCurrentProduct }) => {
  const { products, errorMessage, searchText, category, productsCategories } = useProductsSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    // ВЫПОЛНЯЮТСЯ НЕНУЖНЫЕ РЕНДЕРЫ!!!
    console.log('CATEG RENDERS');
    const productsCategories = filterCategories(products, category);
    dispatch(setProductsCategories(productsCategories));
  }, [products, category, dispatch, setProductsCategories]);

  return (
    <>
      {errorMessage ? (
        <h1>{errorMessage}</h1>
      ) : (
        <>
          <Container>
            <MyTextField searchText={searchText} setSearchText={setSearchText} />
            <CategoriesAndSorting setCategory={setCategory} setSort={setSort} />
            <ProductList
              products={category.length ? productsCategories : products}
              searchText={searchText}
              getCurrentProduct={getCurrentProduct}
            />
          </Container>
        </>
      )}
    </>
  );
};
export default ProductPage;
