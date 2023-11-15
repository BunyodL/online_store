import React from 'react';
import Pagination from '@mui/material/Pagination';
import { useProductsSelector } from '../../../core/hooks/useMySelectors';
import { useDispatch } from 'react-redux';
import { setPage } from '../../../redux-store/reducers/products-reducer';

const MyPagination = ({ count }) => {
  const {
    pagination: { currentPage },
  } = useProductsSelector();
  const dispatch = useDispatch();

  const handlePage = (event, value) => dispatch(setPage(value));

  return (
    <Pagination
      count={count}
      color='primary'
      sx={{ display: 'flex', justifyContent: 'center', paddingTop: '10px', }}
      page={currentPage}
      onChange={handlePage}
    />
  );
};

export default MyPagination;
