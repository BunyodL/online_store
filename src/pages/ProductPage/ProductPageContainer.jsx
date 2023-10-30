import React from 'react';
import ProductPage from './components/ProductPage';
import { setProducts } from '../../redux-store/reducers/products-reducer';
import { useDispatch } from 'react-redux';
import Preloader from '../../components/common/preloader/Preloader';
import { useProductsSelector } from '../../core/hooks/useMySelectors';
import { setAllCategories } from '../../redux-store/reducers/sequence-reducer';
import { useGetAllProductsQuery } from '../../api/apiSlice';
// import { Navigate } from 'react-router-dom';

const ProductPageContainer = () => {
  const dispatch = useDispatch();
  const { products } = useProductsSelector();

  // getting all products with rtk request
  const { data = [], isFetching, isSuccess } = useGetAllProductsQuery();

  if (isSuccess) {
    dispatch(setProducts(data));
    dispatch(setAllCategories(data));
  }

  // if (!isAuth) return <Navigate to={'/login'} />;

  return (
    <>
      {isFetching && <Preloader isFetching={isFetching} />}
      <ProductPage products={products} />
    </>
  );
};

export default ProductPageContainer;
