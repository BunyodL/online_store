import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Sorting = ({ sort, handleSortChange }) => {
  return (
    <div>
      <FormControl sx={{ minWidth: 90, marginRight: 1 }}>
        <InputLabel id='demo-simple-select-autowidth-label'>Sorting by</InputLabel>
        <Select
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          value={sort}
          onChange={handleSortChange}
          autoWidth
          label='Sorting by'
        >
          <MenuItem value=''>
            <em>Default</em>
          </MenuItem>
          <MenuItem value='name'>Name</MenuItem>
          <MenuItem value='rating'>Rating</MenuItem>
          <MenuItem value='count'>Count</MenuItem>
          <MenuItem value='price'>Price</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sorting;
