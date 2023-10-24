import React from 'react';
import st from '../Header.module.css';
import MyDrawer from '../../common/Drawer/MyDrawer';
import { setMenuDrawer } from '../../../redux-store/reducers/header-reducer';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerCloseButton from '../../common/Drawer/DrawerCloseButton';
import { Divider } from '@mui/material';
import DrawerItems from '../../common/Drawer/DrawerItems';
import StoreName from '../StoreName';
import { useHeaderSelector } from '../../../core/hooks/useMySelectors';

const LeftSideHeader = ({ isAuth }) => {
  const { menuDrawer } = useHeaderSelector();

  return (
    <div className={st.leftSideHeader}>
      {isAuth && (
        <MyDrawer open={menuDrawer} setDrawer={setMenuDrawer} drawerSide={'left'} MyDrawerIcon={MenuIcon}>
          <DrawerCloseButton setDrawer={setMenuDrawer} />
          <Divider />
          <DrawerItems />
        </MyDrawer>
      )}
      <StoreName storeName={'Experimental Store'} />
    </div>
  );
};

export default LeftSideHeader;
