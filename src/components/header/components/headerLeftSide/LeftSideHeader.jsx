import React from 'react';
import st from '../../styles/Header.module.css';
import StoreName from './storeName/StoreName';
import MenuDrawer from './menuDrawer/MenuDrawer';

const LeftSideHeader = ({ isAuth }) => {
  return (
    <div className={st.leftSideHeader}>
      {/*{isAuth && (*/}
      <MenuDrawer />
      {/*)}*/}
      <StoreName storeName={'Experimental Store'} />
    </div>
  );
};

export default LeftSideHeader;
