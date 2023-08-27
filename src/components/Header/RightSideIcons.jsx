import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const RightSideIcons = ({ menuId, handleProfileMenuOpen }) => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}>
      <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
        <Badge badgeContent={4} color='error'>
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
      <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
        <Badge badgeContent={17} color='error'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton
        size='large'
        edge='end'
        aria-label='account of current user'
        aria-controls={menuId}
        aria-haspopup='true'
        onClick={handleProfileMenuOpen}
        color='inherit'>
        <AccountCircle />
      </IconButton>
    </Box>
  );
};

export default RightSideIcons;
