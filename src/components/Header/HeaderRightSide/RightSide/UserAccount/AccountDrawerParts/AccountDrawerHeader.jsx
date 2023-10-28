import React from 'react';
import st from '../UserAccount.module.css';
import DrawerCloseButton from '../../../../../common/Drawer/DrawerCloseButton';
import { AccountCircle } from '@mui/icons-material';

const AccountDrawerHeader = React.memo(({ setAccountDrawer }) => {
  return (
    <div className={st.drawerHeader}>
      <div className={st.accountIcon}>
        <button className={st.accountButton}>
          <AccountCircle />
        </button>
      </div>
      <DrawerCloseButton setDrawer={setAccountDrawer} />
    </div>
  );
});

export default AccountDrawerHeader;
