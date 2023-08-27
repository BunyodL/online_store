import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Preloader = ({isFetching}) => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={isFetching} >
      <CircularProgress color='inherit' size={70} />
    </Backdrop>
  );
};

export default Preloader;
