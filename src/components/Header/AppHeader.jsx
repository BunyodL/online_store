import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppDrawer from '../common/Drawer/AppDrawer';
import MobileRightSideIcon from './HeaderRightSide/MobileRightSide/MobileRightSideIcon';
import RightSideHeader from './HeaderRightSide/RightSideHeader';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthSelector } from '../../core/hooks/useMySelectors';
import StoreName from './StoreName';

const AppHeader = ({ handleProfileMenuOpen, mobileMenuId, handleMobileMenuOpen }) => {
  const { isAuth } = useAuthSelector();

  return (
    <AppBar position="static">
      <Toolbar>
        {isAuth && <AppDrawer drawerSide={'left'} DrawerIcon={MenuIcon}></AppDrawer>}
        <StoreName storeName={'Experimental Store'} />
        <Box sx={{ flexGrow: 1 }} />
        <RightSideHeader handleProfileMenuOpen={handleProfileMenuOpen} isAuth={isAuth} />
        <MobileRightSideIcon mobileMenuId={mobileMenuId} handleMobileMenuOpen={handleMobileMenuOpen} isAuth={isAuth} />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
