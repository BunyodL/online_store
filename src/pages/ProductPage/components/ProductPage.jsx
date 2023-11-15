import React from 'react';
import ProductList from '../../../components/productList/ProductList';
import { useProductsSelector, useSequenceSelector } from '../../../core/hooks/useMySelectors';
import CategoriesAndSorting from '../../../components/common/categoriesAndSorting/CategoriesAndSorting';
import MyTextField from '../../../components/common/myTextField/MyTextField';
import {
  setSearchText,
  setProductsBasedOnCategories,
} from '../../../redux-store/reducers/sequence-reducer';
import { useDispatch } from 'react-redux';
import { filterCategories } from '../../../components/common/categoriesAndSorting/categories/filterCategories';
import MyPagination from '../../../components/common/pagination/MyPagination';

const ProductPage = ({ products }) => {
  const dispatch = useDispatch();
  const { errorMessage } = useProductsSelector();
  const { searchText, selectedCategories, productsBasedOnCategories } = useSequenceSelector();

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
          <MyPagination count={8} />
          <ProductList products={productsBasedOnCategories} />
        </>
      )}
    </>
  );
};

export default ProductPage;
