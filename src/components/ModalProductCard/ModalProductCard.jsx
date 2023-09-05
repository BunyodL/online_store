import React from 'react';
import Modal from '@mui/joy/Modal';
import { useDispatch } from 'react-redux';
import ModalSheet from './ModalSheet';

const ModalProductCard = ({ openModal, setOpenModal }) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Modal
        aria-labelledby='modal-title'
        aria-describedby='modal-desc'
        open={openModal}
        onClose={() => dispatch(setOpenModal(false))}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <ModalSheet />
      </Modal>
    </React.Fragment>
  );
};

export default ModalProductCard;
