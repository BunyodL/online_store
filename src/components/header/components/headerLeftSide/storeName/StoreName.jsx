import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const StoreName = React.memo(({ storeName }) => {
  return (
    <Typography
      variant="h6"
      noWrap
      component={NavLink}
      to={'/'}
      sx={{ display: { xs: 'none', sm: 'block' }, textDecoration: 'none', color: 'inherit' }}
    >
      {storeName}
    </Typography>
  );
});

export default StoreName;