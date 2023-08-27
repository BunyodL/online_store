import React, { useEffect } from 'react';
import ProductPage from './ProductPage';
import { getProducts } from '../../redux-store/reducers/product-reducer';
import { connect } from 'react-redux';
import Preloader from '../../components/common/Preloader/Preloader';

const ProductPageContainer = ({ getProducts, products, isFetching, errorMessage }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      {isFetching && <Preloader isFetching={isFetching} />}
      <ProductPage products={products} errorMessage={errorMessage} />
    </>
  );
};

const mapStateToProps = state => ({
  products: state.products.products,
  isFetching: state.products.isFetching,
  errorMessage: state.products.errorMessage,
});

export default connect(mapStateToProps, { getProducts })(ProductPageContainer);
