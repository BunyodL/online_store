import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import ProductList from '../ProductList/ProductList';
import { useDispatch } from 'react-redux';
import { useProductsSelector, useSequenceSelector } from '../../core/hooks/useMySelectors';
import CategoriesAndSorting from '../common/CategoriesAndSorting/CategoriesAndSorting';
import { filterCategories } from '../common/CategoriesAndSorting/Categories/filterCategories';
import MyTextField from '../common/MyTextField/MyTextField';

const ProductPage = ({
                       setSearchText,
                       setCategory,
                       setSort,
                       setProductsWithCategories,
                       getCurrentProduct
                     }) => {
  const { products, errorMessage } = useProductsSelector();
  const { searchText, category, productsWithCategories } = useSequenceSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    const productsCategories = filterCategories(products, category);
    dispatch(setProductsWithCategories(productsCategories));
  }, [products, category, dispatch, setProductsWithCategories]);

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
              products={category.length ? productsWithCategories : products}
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
