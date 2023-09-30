import React from 'react';
import { Typography } from '@mui/material';

const ModalProductTitle = ({ title }) => {
  return (
    <Typography
      sx={{ fontWeight: 'bold', fontSize: { lg: 22, md: 18, sm: 15, xs: 13 } }}
      component="h2"
      id="modal-title"
      variant="h6"
      mb={1}
    >
      {title}
    </Typography>
  );
};

export default ModalProductTitle;