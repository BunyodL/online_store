import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MobileRightSideIcon from './HeaderRightSide/MobileRightSide/MobileRightSideIcon';
import RightSideHeader from './HeaderRightSide/RightSideHeader';
import { useAuthSelector } from '../../core/hooks/useMySelectors';
import LeftSideHeader from './HeaderLeftSide/LeftSideHeader';

const AppHeader = ({ handleMobileMenuOpen }) => {
  const { isAuth } = useAuthSelector();

  return (
    <AppBar position='static'>
      <Toolbar>
        <LeftSideHeader isAuth={isAuth} />
        <Box sx={{ flexGrow: 1 }} />
        <RightSideHeader isAuth={isAuth} />
        <MobileRightSideIcon handleMobileMenuOpen={handleMobileMenuOpen} isAuth={isAuth} />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
