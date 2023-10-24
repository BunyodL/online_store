import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const AccountDrawerFooter = () => {

  return (
    <>
       <List>
        <ListItem disablePadding>
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
};

export default AccountDrawerFooter;