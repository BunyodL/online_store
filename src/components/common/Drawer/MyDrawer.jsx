import React from 'react';
import DrawerIcon from './DrawerIcon';
import Box from '@mui/material/Box';
import DrawerList from './DrawerList';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { useDispatch } from 'react-redux';

const MyDrawer = React.memo(({ setDrawer, open, drawerSide, MyDrawerIcon, children }) => {
  const dispatch = useDispatch();

  const handleDrawerOpen = () => dispatch(setDrawer(true));

  const handleDrawerClose = () => dispatch(setDrawer(false));

  return (
    <>
      <ClickAwayListener onClickAway={handleDrawerClose}>
        <Box>
          <DrawerIcon handleDrawerOpen={handleDrawerOpen} MyDrawerIcon={MyDrawerIcon} />
          <DrawerList children={children} drawerSide={drawerSide} open={open} />
        </Box>
      </ClickAwayListener>
    </>
  );
});

export default MyDrawer;