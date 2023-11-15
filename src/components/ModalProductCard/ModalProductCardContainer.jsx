import React from 'react';
import { useDispatch } from 'react-redux';
import { useModalSelector } from '../../core/hooks/useMySelectors';
import { setOpenModal } from '../../redux-store/reducers/modal-reducer';
import ModalProductCard from './components/ModalProductCard';
import { useParams } from 'react-router-dom';

const ModalProductCardContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  if (id) {
    dispatch(setOpenModal(true));
  }

  const { openModal } = useModalSelector();
  const handleCloseModal = () => dispatch(setOpenModal(false));

  return <ModalProductCard productId={id} openModal={openModal} handleCloseModal={handleCloseModal} />;
};

export default ModalProductCardContainer;
