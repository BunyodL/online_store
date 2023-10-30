import React from 'react';
import Box from '@mui/material/Box';
import Header from './components/Header';
import { useDispatch } from 'react-redux';
import { useHeaderSelector } from '../../core/hooks/useMySelectors';
import { setAccountMenuEl, setMobileMoreAnchorEl } from '../../redux-store/reducers/header-reducer';
import MobileRightSideMenu from './components/headerRightSide/mobileRightSide/MobileRightSideMenu';

const HeaderContainer = React.memo(() => {
  const dispatch = useDispatch();
  const { mobileMoreAnchorEl } = useHeaderSelector();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => dispatch(setAccountMenuEl(event.currentTarget));
  const handleMobileMenuClose = () => dispatch(setMobileMoreAnchorEl(null));
  const handleMobileMenuOpen = (event) => dispatch(setMobileMoreAnchorEl(event.currentTarget));

  return (
    <Box sx={{ paddingBottom: 1 }}>
      <Header handleMobileMenuOpen={handleMobileMenuOpen} />
      <MobileRightSideMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
    </Box>
  );
});

export default HeaderContainer;
