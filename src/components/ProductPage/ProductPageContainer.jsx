import React, { useEffect } from 'react';
import ProductPage from './ProductPage';
import { getProducts, getCurrentProduct } from '../../redux-store/reducers/products-reducer';
import { useDispatch } from 'react-redux';
import Preloader from '../../components/common/Preloader/Preloader';
import { Navigate } from 'react-router-dom';
import { useProductsSelector } from '../../core/hooks/useMySelectors';
import { setCategory, setProductsWithCategories, setSearchText, setSort } from '../../redux-store/reducers/sequence-reducer';

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
        setProductsWithCategories={setProductsWithCategories}
        getCurrentProduct={getCurrentProduct}
      />
    </>
  );
};

export default ProductPageContainer;
