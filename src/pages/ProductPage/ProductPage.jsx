import React from 'react';
import { Container } from '@mui/material';
import ProductList from '../../components/ProductList/ProductList';
import { useProductsSelector, useSequenceSelector } from '../../core/hooks/useMySelectors';
import CategoriesAndSorting from '../../components/common/CategoriesAndSorting/CategoriesAndSorting';
import MyTextField from '../../components/common/MyTextField/MyTextField';
import { setCategory, setSearchText, setSearching, setSort } from '../../redux-store/reducers/sequence-reducer';
import { useDispatch } from 'react-redux';
import { productsOrder } from '../../components/common/CategoriesAndSorting/Sorting/productsOrder';

const ProductPage = ({ handleOpenModal, handleAddToCart, products }) => {
  const { errorMessage } = useProductsSelector();
  const { searchText, searching, sort } = useSequenceSelector();
  const dispatch = useDispatch();

  // sorting products
  // must be changed!!!
  React.useEffect(() => {
    // ЛИШНИЕ РЕРЕНДЕРЫ!!!
    console.log('SEARCHING RENDERS');
    const searchedProducts = products.filter(elem => elem.title.toLowerCase().includes(searchText.trim()));
    dispatch(setSearching(searchedProducts));
  }, [products, searchText, dispatch]);

  const [sortedProducts, setSortedProducts] = React.useState([]);

  React.useEffect(() => {
    setSortedProducts(productsOrder(searching, sort));
    // must be [products, sort]
  }, [searching, sort]);

  return (
    <>
      {errorMessage ? (
        <h1>{errorMessage}</h1>
      ) : (
        <>
          <Container>
            <MyTextField searchText={searchText} setSearchText={setSearchText} />
            <CategoriesAndSorting setCategory={setCategory} setSort={setSort} />
            <ProductList
              products={sortedProducts}
              searching={searching}
              handleAddToCart={handleAddToCart}
              handleOpenModal={handleOpenModal}
            />
          </Container>
        </>
      )}
    </>
  );
};
export default ProductPage;
