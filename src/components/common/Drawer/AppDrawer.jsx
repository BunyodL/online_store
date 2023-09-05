import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';

const AppDrawer = ({ drawerSide, DrawerIcon, children }) => {
  const [state, setState] = useState({
    drawerSide: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 260 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      {children}
    </Box>
  );

  return (
    <>
      {[drawerSide].map(anchor => (
        <>
          <React.Fragment key={anchor}>
            <IconButton onClick={toggleDrawer(anchor, true)} size='large' edge='start' color='inherit' aria-label='open drawer'>
              <DrawerIcon />
            </IconButton>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        </>
      ))}
    </>
  );
};

export default AppDrawer;
