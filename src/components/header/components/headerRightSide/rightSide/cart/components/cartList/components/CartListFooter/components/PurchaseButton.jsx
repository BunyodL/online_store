import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthSelector } from '../../../../../../../../../../../core/hooks/useMySelectors';
import { handleAlertMessage } from '../../../../../../../../../../common/alert/handleAlertMessage';

const PurchaseButton = ({ setOpen, dispatch }) => {
  const { isAuth } = useAuthSelector();

  const onPurchaseBtnClick = () => {
    if (!isAuth) handleAlertMessage('warning', 'Log in to make a purchase', dispatch);

    setOpen(false);
  };

  return (
    <Button
      sx={{ padding: 0.2, fontSize: { lg: 15, md: 14, sm: 12, xs: 7.5 } }}
      size="small"
      variant="contained"
      component={NavLink}
      to={isAuth ? '/purchase' : null}
      onClick={onPurchaseBtnClick}
    >
      Go to purchase
    </Button>
  );
};

export default PurchaseButton;
