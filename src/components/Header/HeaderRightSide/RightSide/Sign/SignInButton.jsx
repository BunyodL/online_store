import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const SignInButton = () => {
  return (
    <Button component={NavLink} to={'/login'} size="small" color="inherit">
      Sign in
    </Button>
  );
};

export default SignInButton;