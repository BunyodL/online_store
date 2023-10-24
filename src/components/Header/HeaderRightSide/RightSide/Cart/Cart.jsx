import React from 'react';
import CartIcon from './CartIcon';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartListContainer from './CartList/CartLIstContainer';

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
      <CartIcon TrashIcon={ShoppingCartOutlinedIcon} anchorRef={anchorRef}
                handleToggle={handleToggle} handleClose={handleClose} />
      <CartListContainer open={open} handleClose={handleClose} anchorRef={anchorRef} />
    </>
  );
};

export default Cart;
