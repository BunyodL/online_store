import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';

const drawerWidth = 240;

const DrawerList = React.memo(({ drawerSide, open, children, handleDrawerClose }) => {
  return (
    <Drawer
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          [drawerSide === 'right' ? 'borderBottomLeftRadius' : 'borderBottomRightRadius']: '8px',
          [drawerSide === 'right' ? 'borderTopLeftRadius' : 'borderTopRightRadius']: '8px',
        },
      }}
      variant='persistent'
      anchor={drawerSide}
      open={open}
    >
      <Box onClick={handleDrawerClose}>{children}</Box>
    </Drawer>
  );
});

export default DrawerList;
