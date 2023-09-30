import React from 'react';
import IconButton from '@mui/material/IconButton';

const AccountIcon = ({ AccIcon, title, handleProfileMenuOpen }) => {
  return (
    <>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='primary-search-account-menu'
        aria-haspopup='true'
        color='inherit'
        onClick={handleProfileMenuOpen}
      >
        <AccIcon />
      </IconButton>
      {title}
    </>
  );
};

export default AccountIcon;
