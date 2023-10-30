import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../../../../../redux-store/reducers/auth-reducer';

const AccountDrawerFooter = React.memo(() => {
  const dispatch = useDispatch();

  return (
    <>
      <List>
        <ListItem disablePadding onClick={() => dispatch(signOut())}>
          <ListItemButton>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={'Sign Out'} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
});

export default AccountDrawerFooter;
