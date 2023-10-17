import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useProductsSelector } from '../../../../../core/hooks/useMySelectors';

const CartIcon = ({ MyTrashIcon, title, anchorRef, handleToggle, handleClose }) => {
  const { productsInCart } = useProductsSelector();

  return (
    <>
        <IconButton
          ref={anchorRef}
          onClick={handleToggle}
          onClose={handleClose}
          size="large"
          color="inherit"
        >
          <Badge badgeContent={productsInCart.length} color="error">
            <MyTrashIcon />
          </Badge>
        </IconButton>
        {title}
    </>
  );
};

export default CartIcon;
