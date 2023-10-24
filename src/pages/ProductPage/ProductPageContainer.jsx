import React, { useEffect } from 'react';
import ProductPage from './ProductPage';
import {
  getProducts,
  getCurrentProduct,
  setOpenModal,
  setAlert,
  setProductsToCart,
  setOpenAlert,
} from '../../redux-store/reducers/products-reducer';
import { useDispatch } from 'react-redux';
import Preloader from '../../components/common/Preloader/Preloader';
import { useProductsSelector, useSequenceSelector } from '../../core/hooks/useMySelectors';
import { setCategories, setProductsWithCategories } from '../../redux-store/reducers/sequence-reducer';
import { filterCategories } from '../../components/common/CategoriesAndSorting/Categories/filterCategories';
// import { Navigate } from 'react-router-dom';

const ProductPageContainer = () => {
  const { products, isFetching, productsInCart, errorMessage } = useProductsSelector();
  const { category, productsWithCategories } = useSequenceSelector();
  const dispatch = useDispatch();

  // getting all products
  useEffect(() => {
    console.log('GET PRODUCTS');
    dispatch(getProducts());
  }, [dispatch]);

  // setting products categories to array
  useEffect(() => {
    console.log('SET CATEGORIES');
    dispatch(setCategories(products));
  }, [products, dispatch ]);

  // filtering products by category
  useEffect(() => {
    console.log('Filter Categories');
    const productsCategories = filterCategories(products, category);
    dispatch(setProductsWithCategories(productsCategories));
  }, [products, category, dispatch]);

  // getting product id and opening modal window
  const handleOpenModal = productId => {
    dispatch(setOpenModal(true));
    dispatch(getCurrentProduct(productId));
  };

  const handleAlertMessage = (type, message) => {
    dispatch(setAlert({ type, message }));
  };

  // adding product to the cart and showing alert
  const handleAddToCart = productId => {
    if (!productsInCart.some(elem => elem.id === productId)) {
      if (errorMessage) {
        handleAlertMessage('error', errorMessage);
      } else {
        dispatch(setProductsToCart({ productId, quantity: 1 }));
        handleAlertMessage('success', 'Product added to cart!');
      }
    } else {
      handleAlertMessage('warning', 'This product is already in the cart!');
    }
    dispatch(setOpenAlert(true));
  };

  // if (!isAuth) return <Navigate to={'/login'} />;

  return (
    <>
      {isFetching && <Preloader isFetching={isFetching} />}
      <ProductPage products={productsWithCategories} handleAddToCart={handleAddToCart} handleOpenModal={handleOpenModal} />
    </>
  );
};

export default ProductPageContainer;
