import * as React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MyDrawer from '../../../../common/Drawer/MyDrawer';
import { setAccountDrawer } from '../../../../../redux-store/reducers/header-reducer';
import { useHeaderSelector } from '../../../../../core/hooks/useMySelectors';
import { Divider } from '@mui/material';
import AccountDrawerHeader from './AccountDrawerParts/AccountDrawerHeader';
import AccountDrawerBody from './AccountDrawerParts/AccountDrawerBody';
import AccountDrawerFooter from './AccountDrawerParts/AccountDrawerFooter';

const UserAccount = React.memo(() => {
  const { accountDrawer } = useHeaderSelector();

  return (
    <MyDrawer open={accountDrawer} setDrawer={setAccountDrawer} drawerSide={'right'} MyDrawerIcon={AccountCircle}>
      <AccountDrawerHeader setAccountDrawer={setAccountDrawer} />
      <Divider />
      <AccountDrawerBody />
      <Divider />
      <AccountDrawerFooter />
    </MyDrawer>
  );
});

export default UserAccount;
