import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useAuthSelector } from '../../../core/hooks/useMySelectors';
import LeftSideHeader from './headerLeftSide/LeftSideHeader';
import RightSideHeader from './headerRightSide/RightSideHeader';
import MobileRightSideIcon from './headerRightSide/mobileRightSide/MobileRightSideIcon';


const Header = ({ handleMobileMenuOpen }) => {
  const { isAuth } = useAuthSelector();

  return (
    <AppBar>
      <Toolbar>
        <LeftSideHeader isAuth={isAuth} />
        <Box sx={{ flexGrow: 1 }} />
        <RightSideHeader isAuth={isAuth} />
        <MobileRightSideIcon handleMobileMenuOpen={handleMobileMenuOpen} isAuth={isAuth} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
