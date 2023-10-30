import React from 'react';
import ModalClose from '@mui/joy/ModalClose';

const ModalCloseButton = () => {
  return (
    <ModalClose
      variant='outlined'
      sx={{
        top: 'calc(-1/4 * var(--IconButton-size))',
        right: 'calc(-1/4 * var(--IconButton-size))',
        boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
        borderRadius: '50%',
        bgcolor: 'background.surface',
      }}
    />
  );
};

export default ModalCloseButton;
