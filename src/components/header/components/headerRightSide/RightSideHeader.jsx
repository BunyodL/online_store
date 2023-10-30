import React from 'react';
import Box from '@mui/material/Box';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Notification from './rightSide/notification/Notification';
import SignInButton from './rightSide/sign/SignInButton';
import Cart from './rightSide/cart/Cart';
import UserAccount from './rightSide/userAccount/UserAccount';

const RightSideHeader = React.memo(({ isAuth }) => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center' }}>
      {!isAuth && <SignInButton />}
      <Cart />
      <Notification NotificationIcon={NotificationsIcon} />
      <UserAccount />
    </Box>
  );
});

export default RightSideHeader;
