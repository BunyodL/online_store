import React from 'react';
import Modal from '@mui/joy/Modal';
import ModalSheet from './modalParts/ModalSheet';
import { useNavigate } from 'react-router-dom';

const ModalProductCard = ({ openModal, handleCloseModal, productId }) => {
  const navigate = useNavigate();

  return (
    <Modal
      aria-labelledby='modal-title'
      aria-describedby='modal-desc'
      open={openModal}
      onClick={() => {
        navigate('/products')
        handleCloseModal()
      }}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <ModalSheet productId={productId} />
    </Modal>
  );
};

export default ModalProductCard;
