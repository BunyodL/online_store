import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';
import ModalProductCard from '../ModalProductCard/ModalProductCard';
import { useProductsSelector, useSequenceSelector } from '../../core/hooks/useMySelectors';
import { useDispatch } from 'react-redux';
import { setOpenModal, setAlert } from '../../redux-store/reducers/products-reducer';
import { productsOrder } from '../common/CategoriesAndSorting/Sorting/productsOrder';
import { setSearching } from '../../redux-store/reducers/sequence-reducer';
import AlertMessage from '../common/Alert/AlertMessage';
import { setProductsInCart } from '../../redux-store/reducers/cart-reducer';

const ProductList = ({ products, searchText, getCurrentProduct }) => {
  const { openModal } = useProductsSelector();
  const { searching, sort } = useSequenceSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    // ЛИШНИЕ РЕРЕНДЕРЫ!!!
    console.log('SEARCHING RENDERS');
    const searchedProducts = products.filter(elem => elem.title.toLowerCase().includes(searchText));
    dispatch(setSearching(searchedProducts));
  }, [searchText, products, dispatch]);

  const handleProductId = productId => {
    dispatch(setOpenModal(true));
    dispatch(getCurrentProduct(productId));
  };

  const handleAlertMessage = (type, message) => {
    dispatch(setAlert({type, message}))
  }

  return (
    <>
      {!searching.length && <h1>No products found</h1>}
      <ModalProductCard openModal={openModal} setOpenModal={setOpenModal}/>
      <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBlock: 10 }}>
        {productsOrder(searching, sort).map(i => (
          <Grid item lg={3} md={3} sm={4} xs={6} key={i.id}>
            <ProductCard
              productId={i.id}
              title={i.title}
              image={i.image}
              rating={i.rating}
              price={i.price}
              handleProductId={handleProductId}
              handleAlertMessage={handleAlertMessage}
              setProductsInCart={setProductsInCart}
            />
          </Grid>
        ))}
      </Grid>
      <AlertMessage />
    </>
  );
};

export default ProductList;
