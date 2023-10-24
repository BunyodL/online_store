import React from 'react';
import Box from '@mui/material/Box';
import MobileRightSideMenu from './HeaderRightSide/MobileRightSide/MobileRightSideMenu';
import AppHeader from './AppHeader';
import { useDispatch } from 'react-redux';
import { useHeaderSelector } from '../../core/hooks/useMySelectors';
import { setAccountMenuEl, setMobileMoreAnchorEl } from '../../redux-store/reducers/header-reducer';

const Header = () => {
  const dispatch = useDispatch();
  const { mobileMoreAnchorEl } = useHeaderSelector();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => dispatch(setAccountMenuEl(event.currentTarget));
  const handleMobileMenuClose = () => dispatch(setMobileMoreAnchorEl(null));
  const handleMobileMenuOpen = event => dispatch(setMobileMoreAnchorEl(event.currentTarget));

  return (
    <Box sx={{ position: 'fixed', width: '100%', zIndex: 99, paddingBottom: 1, backgroundColor: 'white' }}>
      <AppHeader handleMobileMenuOpen={handleMobileMenuOpen} />
      <MobileRightSideMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
    </Box>
  );
};

export default Header;
