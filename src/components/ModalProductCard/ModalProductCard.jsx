import React from 'react';
import Modal from '@mui/joy/Modal';
import { useDispatch } from 'react-redux';
import ModalSheet from './ModalParts/ModalSheet';

const ModalProductCard = ({ openModal, setOpenModal }) => {
  const dispatch = useDispatch();
  return (
      <Modal
        aria-labelledby='modal-title'
        aria-describedby='modal-desc'
        open={openModal}
        onClose={() => dispatch(setOpenModal(false))}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <ModalSheet />
      </Modal>
  );
};

export default ModalProductCard;
