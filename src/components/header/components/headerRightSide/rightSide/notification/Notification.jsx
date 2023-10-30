import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

const Notification = ({ NotificationIcon, title }) => {
  return (
    <>
      <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
        <Badge badgeContent={17} color='error'>
          <NotificationIcon />
        </Badge>
      </IconButton>
      {title}
    </>
  );
};

export default Notification;
