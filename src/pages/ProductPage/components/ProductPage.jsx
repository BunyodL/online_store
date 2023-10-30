import React from 'react';
import ProductList from '../../../components/productList/ProductList';
import { useProductsSelector, useSequenceSelector } from '../../../core/hooks/useMySelectors';
import CategoriesAndSorting from '../../../components/common/categoriesAndSorting/CategoriesAndSorting';
import MyTextField from '../../../components/common/myTextField/MyTextField';
import {
  setSearchText,
  setAllCategories,
  setProductsBasedOnCategories,
} from '../../../redux-store/reducers/sequence-reducer';
import { useDispatch } from 'react-redux';
import { filterCategories } from '../../../components/common/categoriesAndSorting/categories/filterCategories';

const ProductPage = ({ products }) => {
  const dispatch = useDispatch();
  const { errorMessage } = useProductsSelector();
  const { searchText, selectedCategories, productsBasedOnCategories } = useSequenceSelector();

  // setting products categories to array
  React.useEffect(() => {
    console.log('SET CATEGORIES');
    if (products) {
      dispatch(setAllCategories(products));
    }
  }, [products, dispatch]);

  // filtering products by category
  React.useEffect(() => {
    console.log('Filter Categories');
    const productsCategories = filterCategories(products, selectedCategories);
    dispatch(setProductsBasedOnCategories(productsCategories));
  }, [products, selectedCategories, dispatch]);

  return (
    <>
      {errorMessage ? (
        <h1>{errorMessage}</h1>
      ) : (
        <>
          <MyTextField searchText={searchText} setSearchText={setSearchText} />
          <CategoriesAndSorting />
          <ProductList products={productsBasedOnCategories} />
        </>
      )}
    </>
  );
};

export default ProductPage;
