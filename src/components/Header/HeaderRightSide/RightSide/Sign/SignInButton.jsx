import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const SignInButton = () => {
  return (
    <NavLink to={'/login'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
      <Button size="small" color="inherit">
        Sign in
      </Button>
    </NavLink>
  );
};

export default SignInButton;