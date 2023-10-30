import React from 'react';
import IconButton from '@mui/material/IconButton';

const DrawerIcon = React.memo(({ MyDrawerIcon, handleDrawerOpen }) => {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="end"
      sx={{ padding: '12px' }}
      onClick={handleDrawerOpen}
    >
      <MyDrawerIcon />
    </IconButton>
  );
});

export default DrawerIcon;