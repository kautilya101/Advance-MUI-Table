import React, { useState } from 'react';
import { Stack, Select, MenuItem,InputLabel, Button, FormControl } from '@mui/material'


const Grouping = ({setGroupBy,handleToggle}) => {
  const [option, setOption] = useState('');
  const handleChange = (event) => {
    const value = event.target.value
    setOption(value);
  };

  const handleOption = () => {
    setGroupBy(option == '' ? [] : option)
    handleToggle(false)
  }

  return (
    <Stack gap='10px'>
    <FormControl>
      <InputLabel id="groupby-options-label">Select Column</InputLabel>
      <Select
        labelId='groupby-options-label'
        id="groupby-options"
        value={option}
        label="Select Column"
        onChange={handleChange}
      >
        {["category","subcategory"].map((column) => (
          <MenuItem
            key={column}
            value={column}
          >
            {column}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
      <Button onClick={handleOption}>
          Apply Grouping
      </Button>
    </Stack>
  );
}

export default Grouping;
