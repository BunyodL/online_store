import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const DrawerCloseButton = ({setDrawer}) => {
  const dispatch = useDispatch();

  return (
    <DrawerHeader>
      <IconButton onClick={() => dispatch(setDrawer(false))}>
        <CloseIcon />
      </IconButton>
    </DrawerHeader>
  );
};

export default DrawerCloseButton;