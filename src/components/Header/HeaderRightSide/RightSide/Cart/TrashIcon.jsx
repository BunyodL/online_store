import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useCartSelector } from '../../../../../core/hooks/useMySelectors';

const TrashIcon = ({ MyTrashIcon, title }) => {
  const { productsInCart } = useCartSelector();

  return (
    <>
      <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
        <Badge badgeContent={productsInCart.length} color='error'>
          <MyTrashIcon />
        </Badge>
      </IconButton>
      {title}
    </>
  );
};

export default TrashIcon;
