import React from 'react';
import { useDispatch } from 'react-redux';
import { useProductsSelector } from '../../core/hooks/useMySelectors';
import { setOpenModal } from '../../redux-store/reducers/products-reducer';
import ModalProductCard from './ModalProductCard';

const ModalProductCardContainer = () => {
  const dispatch = useDispatch();
  const { openModal } = useProductsSelector();

  const handleCloseModal = () => dispatch(setOpenModal(false));

  return <ModalProductCard openModal={openModal} handleCloseModal={handleCloseModal} />;
};

export default ModalProductCardContainer;
