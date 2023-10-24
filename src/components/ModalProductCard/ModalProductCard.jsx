import React from 'react';
import Modal from '@mui/joy/Modal';
import ModalSheet from './ModalParts/ModalSheet';

const ModalProductCard = ({ openModal, handleCloseModal }) => {
  return (
    <Modal
      aria-labelledby='modal-title'
      aria-describedby='modal-desc'
      open={openModal}
      onClose={handleCloseModal}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <ModalSheet />
    </Modal>
  );
};

export default ModalProductCard;
