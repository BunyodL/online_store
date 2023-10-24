import React from 'react';
import Box from '@mui/material/Box';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Notification from './RightSide/Notification/Notification';
import SignInButton from './RightSide/Sign/SignInButton';
import Cart from './RightSide/Cart/Cart';
import UserAccount from './RightSide/UserAccount/UserAccount';

const RightSideHeader = ({ isAuth }) => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center' }}>
      {!isAuth && <SignInButton />}
      <Cart />
      <Notification NotificationIcon={NotificationsIcon} />
      <UserAccount />
    </Box>
  );
};

export default RightSideHeader;
