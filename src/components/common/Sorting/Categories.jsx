import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories = ["Men's clothing", "Women's clothing", 'Jewelry', 'Electronics'];

const Categories = ({ category, handleCategoryChange }) => {
  return (
    <div>
      <FormControl sx={{ width: 200, marginRight: 1 }}>
        <InputLabel id='demo-multiple-checkbox-label'>Categories</InputLabel>
        <Select
          labelId='demo-multiple-checkbox-label'
          id='demo-multiple-checkbox'
          multiple
          value={category}
          onChange={handleCategoryChange}
          input={<OutlinedInput label='Categories' />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}>
          {categories.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={category.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Categories;
