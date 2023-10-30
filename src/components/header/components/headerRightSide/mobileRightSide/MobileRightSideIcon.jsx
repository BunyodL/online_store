import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import SignInButton from '../rightSide/sign/SignInButton';

const MobileRightSideIcon = React.memo(({ handleMobileMenuOpen, isAuth }) => {
  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      {!isAuth && <SignInButton />}
      <IconButton
        size="large"
        aria-label="show more"
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MoreIcon />
      </IconButton>
    </Box>
  );
});

export default MobileRightSideIcon;
