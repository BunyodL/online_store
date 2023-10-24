import React from 'react';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import CartListMenu from './CartListMenu';
import CartListFooter from './CartListFooter';

const CartList = ({
                    open,
                    handleClose,
                    anchorRef,
                    productsInCart,
                    handleRemoveFromCart,
                    numberRounding
                  }) => {

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
            <CartListMenu
              handleRemoveFromCart={handleRemoveFromCart}
              handleClose={handleClose} open={open}
              productsInCart={productsInCart}
              numberRounding={numberRounding}
            />
            {productsInCart.length ? <CartListFooter productsInCart={productsInCart} /> : null}
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default CartList;