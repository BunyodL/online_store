import { Button } from '@mui/material';
import React from 'react';
import { resetCart } from '../../../../../../../../../../../redux-store/reducers/products-reducer';

const ResetButton = ({ dispatch }) => {
  const resetEntireCart = () => dispatch(resetCart());

  return (
    <Button
      sx={{
        padding: 0.2,
        fontSize: { lg: 15, md: 14, sm: 12, xs: 7.5 },
        backgroundColor: 'red',
      }}
      size='small'
      variant='contained'
      onClick={resetEntireCart}
    >
      Reset cart
    </Button>
  );
};

export default ResetButton;
