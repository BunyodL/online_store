import React from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';

const MyTextField = ({ searchText, setSearchText }) => {
  const dispatch = useDispatch();

  const handleTextChange = event => {
    dispatch(setSearchText(event.target.value));
  };

  return (
    <TextField
      fullWidth
      id='standard-basic'
      label='Search'
      variant='standard'
      sx={{ marginBlock: 2 }}
      onChange={handleTextChange}
      value={searchText}
    />
  );
};

export default MyTextField;
