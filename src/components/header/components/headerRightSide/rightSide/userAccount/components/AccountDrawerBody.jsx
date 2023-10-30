import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import { NavLink } from 'react-router-dom';

const AccountDrawerBody = React.memo(() => {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to={'/profile'}>
            <ListItemIcon>
              <PersonOutlineTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary={'My Profile'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to={'/orders'}>
            <ListItemIcon>
              <ShoppingBagTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary={'Orders'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to={'/settings'}>
            <ListItemIcon>
              <SettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'Settings'} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
});

export default AccountDrawerBody;
