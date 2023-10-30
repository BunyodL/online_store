import React from 'react';
import MyDrawer from '../../../../common/drawer/MyDrawer';
import DrawerCloseButton from '../../../../common/drawer/components/DrawerCloseButton';
import { Divider } from '@mui/material';
import MenuDrawerBody from './components/MenuDrawerBody';
import { setMenuDrawer } from '../../../../../redux-store/reducers/header-reducer';
import MenuIcon from '@mui/icons-material/Menu';
import { useHeaderSelector } from '../../../../../core/hooks/useMySelectors';

const MenuDrawer = () => {
  const { menuDrawer } = useHeaderSelector();

  return (
    <div>
      <MyDrawer
        open={menuDrawer}
        setDrawer={setMenuDrawer}
        drawerSide={'left'}
        MyDrawerIcon={MenuIcon}
      >
        <DrawerCloseButton setDrawer={setMenuDrawer} />
        <Divider />
        <MenuDrawerBody />
      </MyDrawer>
    </div>
  );
};

export default MenuDrawer;
