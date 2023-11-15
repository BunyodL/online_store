import React from 'react';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import CartListMenu from './CartListMenu';
import CartListFooter from './CartListFooter/CartListFooter';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const CartList = ({
                    open,
                    handleClose,
                    anchorRef,
                    productsInCart,
                    handleRemoveFromCart,
                    numberRounding,
                    setOpen,
                  }) => {
  return (
    <ClickAwayListener onClickAway={handleClose}>
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
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              {/*this is the list of our products in the cart */}
              <CartListMenu
                handleRemoveFromCart={handleRemoveFromCart}
                open={open}
                productsInCart={productsInCart}
                numberRounding={numberRounding}
              />
              {productsInCart.length ? (
                <CartListFooter setOpen={setOpen} productsInCart={productsInCart} />
              ) : null}
            </Paper>
          </Grow>
        )}
      </Popper>
    </ClickAwayListener>
  );
};

export default CartList;
