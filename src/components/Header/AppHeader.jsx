import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppDrawer from '../common/Drawer/AppDrawer';
import MobileRightSideIcon from './MobileHeader/MobileRightSideIcon';
import RightSideIcons from './RightSideIcons';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const AppHeader = ({ menuId, handleProfileMenuOpen, mobileMenuId, handleMobileMenuOpen, isAuth }) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        {isAuth && <AppDrawer drawerSide={'left'} DrawerIcon={MenuIcon}></AppDrawer>}
        <Typography variant='h6' noWrap component='div' sx={{ display: { xs: 'none', sm: 'block' } }}>
          Experimental Store
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {!isAuth && (
          <NavLink to={'/login'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <Button size='small' color='inherit'>
              Sign in
            </Button>
          </NavLink>
        )}
        {isAuth && (
          <>
            <RightSideIcons menuId={menuId} handleProfileMenuOpen={handleProfileMenuOpen} />
            <MobileRightSideIcon mobileMenuId={mobileMenuId} handleMobileMenuOpen={handleMobileMenuOpen} />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
