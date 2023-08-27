import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LeftSideDrawer from './Drawer/LeftSideDrawer';
import MobileRightSideIcon from './MobileHeader/MobileRightSideIcon';
import RightSideIcons from './RightSideIcons';
import { Button } from '@mui/material';

const AppHeader = ({ menuId, handleProfileMenuOpen, mobileMenuId, handleMobileMenuOpen }) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <LeftSideDrawer />
        <Typography variant='h6' noWrap component='div' sx={{ display: { xs: 'none', sm: 'block' } }}>
          Experimental Store
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button size='small' color='inherit'>
            Sign in
          </Button>
        </div>
        <RightSideIcons menuId={menuId} handleProfileMenuOpen={handleProfileMenuOpen} />
        <MobileRightSideIcon mobileMenuId={mobileMenuId} handleMobileMenuOpen={handleMobileMenuOpen} />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
