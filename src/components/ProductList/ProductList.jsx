import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from '../productCard/ProductCard';
import ModalProductCardContainer from '../modalProductCard/ModalProductCardContainer';
import { productsOrder } from '../common/categoriesAndSorting/sorting/productsOrder';
import { setSearching } from '../../redux-store/reducers/sequence-reducer';
import { useDispatch } from 'react-redux';
import { useSequenceSelector } from '../../core/hooks/useMySelectors';

const ProductList = React.memo(({ products }) => {
  const dispatch = useDispatch();
  const { searchText, searching, selectedSort } = useSequenceSelector();

  // sorting products
  React.useEffect(() => {
    // ЛИШНИЕ РЕРЕНДЕРЫ!!!
    console.log('SEARCHING RENDERS');
    const searchedProducts = products.filter((elem) => elem.title.toLowerCase().includes(searchText.trim()));
    dispatch(setSearching(searchedProducts));
  }, [products, searchText, dispatch]);

  const [sortedProducts, setSortedProducts] = React.useState([]);

  // ordering products
  React.useEffect(() => {
    setSortedProducts(productsOrder(searching, selectedSort));
  }, [searching, selectedSort]);

  return (
    <>
      {!searching.length && <h1>No products found</h1>}
      <ModalProductCardContainer />
      <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBlock: 10 }}>
        {sortedProducts.map((i) => (
          <Grid item lg={3} md={3} sm={4} xs={6} key={i.id}>
            <ProductCard
              productId={i.id}
              title={i.title}
              images={i.images}
              price={i.price}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
});

export default ProductList;
