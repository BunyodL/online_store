import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Sorting = React.memo(({ selectedSort, handleSortChange }) => {
  const sortType = {
    default: '',
    name: 'name',
    price: 'price',
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 90, marginRight: 1 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Sorting by</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectedSort}
          onChange={handleSortChange}
          autoWidth
          label="Sorting by"
        >
          {Object.entries(sortType).map(item => <MenuItem value={item[1]}>{item[0]}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  )
    ;
});

export default Sorting;
