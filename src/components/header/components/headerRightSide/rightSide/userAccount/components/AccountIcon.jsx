import React from 'react';
import IconButton from '@mui/material/IconButton';

const AccountIcon = ({ AccIcon, title, anchorRef, handleToggle, handleClose }) => {
  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleToggle}
        onClose={handleClose}
        size="large"
        color="inherit"
      >
        <AccIcon />
      </IconButton>
      {title}
    </>
  );
};

export default AccountIcon;
