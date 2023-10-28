import React from 'react';
import Drawer from '@mui/material/Drawer';

const drawerWidth = 240;

const DrawerList = React.memo(({ drawerSide, open, children }) => {
  return (
    <Drawer
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          [drawerSide === 'right' ? 'borderBottomLeftRadius' : 'borderBottomRightRadius']: '8px',
          [drawerSide === 'right' ? 'borderTopLeftRadius' : 'borderTopRightRadius']: '8px',
        },
      }}
      variant="persistent"
      anchor={drawerSide}
      open={open}
    >
      {children}
    </Drawer>
  );
});

export default DrawerList;