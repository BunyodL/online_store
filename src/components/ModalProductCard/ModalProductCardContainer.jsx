import React from 'react';
import { useDispatch } from 'react-redux';
import { useModalSelector } from '../../core/hooks/useMySelectors';
import { setOpenModal } from '../../redux-store/reducers/modal-reducer';
import ModalProductCard from './components/ModalProductCard';

const ModalProductCardContainer = () => {
  const dispatch = useDispatch();
  const { openModal } = useModalSelector();

  const handleCloseModal = () => dispatch(setOpenModal(false));

  return <ModalProductCard openModal={openModal} handleCloseModal={handleCloseModal} />;
};

export default ModalProductCardContainer;
