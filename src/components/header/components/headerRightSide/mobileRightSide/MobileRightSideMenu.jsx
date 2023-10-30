import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ShoppingCartRounded } from '@mui/icons-material';
import CartIcon from '../rightSide/cart/components/CartIcon';
import Notification from '../rightSide/notification/Notification';
import AccountIcon from '../rightSide/userAccount/components/AccountIcon';

const MobileRightSideMenu = ({ mobileMoreAnchorEl, isMobileMenuOpen, handleMobileMenuClose, handleProfileMenuOpen }) => {
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <CartIcon TrashIcon={ShoppingCartRounded} title={'Cart'} />
      </MenuItem>
      <MenuItem>
        <Notification NotificationIcon={NotificationsIcon} title={'Notifications'} />
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <AccountIcon AccIcon={AccountCircle} title={'Profile'} />
      </MenuItem>
    </Menu>
  );
};

export default MobileRightSideMenu;
