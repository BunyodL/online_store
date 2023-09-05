import React, { useEffect } from 'react';
import ProductPage from './ProductPage';
import {
  getProducts,
  setSearchText,
  setCategory,
  setSort,
  setProductsCategories,
  getCurrentProduct,
} from '../../redux-store/reducers/product-reducer';
import { useDispatch } from 'react-redux';
import Preloader from '../../components/common/Preloader/Preloader';
import { Navigate } from 'react-router-dom';
import { useProductsSelector } from '../../core/hooks/useMySelectors';

const ProductPageContainer = () => {
  const { isFetching } = useProductsSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // if (!isAuth) return <Navigate to={'/login'} />;

  return (
    <>
      {isFetching && <Preloader isFetching={isFetching} />}
      <ProductPage
        setSearchText={setSearchText}
        setCategory={setCategory}
        setSort={setSort}
        setProductsCategories={setProductsCategories}
        getCurrentProduct={getCurrentProduct}
      />
    </>
  );
};

export default ProductPageContainer;
