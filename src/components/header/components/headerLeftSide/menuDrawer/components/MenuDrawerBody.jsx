import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';

const MenuDrawerBody = React.memo(() => {
  const pages = {
    product: {
      path: '/products',
      name: 'Products',
    },
    cart: {
      path: '/cart',
      name: 'Cart',
    },
    purchase: {
      path: '/purchase',
      name: 'Purchase',
    }
  };

  return (
    <>
      <List>
        {Object.values(pages).map((page, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton component={NavLink} to={page.path}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={page.name} />
              </ListItemButton>
            </ListItem>
          );
        })
        }
      </List>
      <Divider />
    </>
  );
});

export default MenuDrawerBody;
