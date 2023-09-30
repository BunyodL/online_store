import React from 'react';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import TrashIcon from './RightSide/Cart/TrashIcon';
import Notification from './RightSide/Notification/Notification';
import AccountIcon from './RightSide/UserAccount/AccountIcon';
import SignInButton from './RightSide/Sign/SignInButton';

const RightSideHeader = ({ handleProfileMenuOpen, isAuth }) => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}>
      {!isAuth && <SignInButton />}
      <TrashIcon MyTrashIcon={ShoppingCartOutlinedIcon} />
      <Notification NotificationIcon={NotificationsIcon} />
      <AccountIcon AccIcon={AccountCircle} handleProfileMenuOpen={handleProfileMenuOpen} />
    </Box>
  );
};

export default RightSideHeader;
