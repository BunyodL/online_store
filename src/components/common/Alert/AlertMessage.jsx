import React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useProductsSelector } from '../../../core/hooks/useMySelectors';
import { setAlert, setOpenAlert } from '../../../redux-store/reducers/products-reducer';
import { useDispatch } from 'react-redux';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={5} ref={ref} variant="filled" {...props} />;
});

const AlertMessage = () => {
  const { openAlert, alert } = useProductsSelector();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpenAlert(false));
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={openAlert} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.type} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default AlertMessage;
