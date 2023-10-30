import * as React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MyDrawer from '../../../../../common/drawer/MyDrawer';
import { setAccountDrawer } from '../../../../../../redux-store/reducers/header-reducer';
import { useHeaderSelector } from '../../../../../../core/hooks/useMySelectors';
import { Divider } from '@mui/material';
import AccountDrawerHeader from './components/AccountDrawerHeader';
import AccountDrawerBody from './components/AccountDrawerBody';
import AccountDrawerFooter from './components/AccountDrawerFooter';

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
