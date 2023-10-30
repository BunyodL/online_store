import React from 'react';
import TextField  from '@mui/material/TextField/TextField';
import { useDispatch } from 'react-redux';

const MyTextField = React.memo(({ searchText, setSearchText }) => {
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
      sx={{ marginBottom: 2, marginTop: { xs: 7, sm: 8, md: 9 } }}
      onChange={handleTextChange}
      value={searchText}
    />
  );
});

export default MyTextField;
