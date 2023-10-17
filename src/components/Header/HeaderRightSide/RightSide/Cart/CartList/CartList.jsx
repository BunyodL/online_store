import React from 'react';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import CartMenuList from './CartMenuList';

const CartList = ({ open, handleClose, anchorRef }) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      placement="bottom-start"
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom-start' ? 'left top' : 'left bottom',
          }}
        >
          <Paper>
            {/*this is the list of our products in the cart */}
            <CartMenuList handleClose={handleClose} open={open} />
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default CartList;