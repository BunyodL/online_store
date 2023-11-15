import React from 'react';
import ProductPage from './components/ProductPage';
import { setProducts } from '../../redux-store/reducers/products-reducer';
import { useDispatch } from 'react-redux';
import Preloader from '../../components/common/preloader/Preloader';
import { useProductsSelector } from '../../core/hooks/useMySelectors';
import { useGetAllProductsQuery } from '../../api/apiSlice';

const ProductPageContainer = () => {
  const dispatch = useDispatch();
  const {
    products,
    pagination: { currentPage, limit },
  } = useProductsSelector();

  // getting all products with rtk request
  const { data = [], isFetching, isSuccess } = useGetAllProductsQuery({offset: (currentPage - 1) * limit, limit });

  if (isSuccess) {
    dispatch(setProducts(data));
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
