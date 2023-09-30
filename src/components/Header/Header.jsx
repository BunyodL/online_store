import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MobileRightSideMenu from './HeaderRightSide/MobileRightSide/MobileRightSideMenu';
import RightSideProfileMenu from './HeaderRightSide/RightSideProfileMenu';
import AppHeader from './AppHeader';
import { useDispatch } from 'react-redux';
import { useHeaderSelector } from '../../core/hooks/useMySelectors';
import { setAnchorEl, setMobileMoreAnchorEl } from '../../redux-store/reducers/header-reducer';

const Header = () => {
  const dispatch = useDispatch();
  const { anchorEl, mobileMoreAnchorEl, menuId, mobileMenuId } = useHeaderSelector();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => dispatch(setAnchorEl(event.currentTarget));
  const handleMobileMenuClose = () => dispatch(setMobileMoreAnchorEl(null));
  const handleMenuClose = () => {
    dispatch(setAnchorEl(null));
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = event => dispatch(setMobileMoreAnchorEl(event.currentTarget));

  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', width: '100%', zIndex: 99 }}>
      <AppHeader
        handleProfileMenuOpen={handleProfileMenuOpen}
        mobileMenuId={mobileMenuId}
        handleMobileMenuOpen={handleMobileMenuOpen}
      />
      <div style={{ backgroundColor: 'white', height: 10, zIndex: 98 }}></div>
      <MobileRightSideMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
      <RightSideProfileMenu anchorEl={anchorEl} menuId={menuId} isMenuOpen={isMenuOpen}
                            handleMenuClose={handleMenuClose} />
    </Box>
  );
};

export default Header;
