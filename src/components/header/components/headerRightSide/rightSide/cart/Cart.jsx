import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartListContainer from './components/cartList/CartListContainer';
import CartIcon from './components/CartIcon';

const Cart = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <CartIcon
        TrashIcon={ShoppingCartOutlinedIcon}
        anchorRef={anchorRef}
        handleToggle={handleToggle}
        handleClose={handleClose}
      />
      <CartListContainer open={open} setOpen={setOpen} handleClose={handleClose} anchorRef={anchorRef} />
    </>
  );
};

export default Cart;
