import React, { useState } from 'react';
import { Stack, Select, MenuItem,InputLabel, Button } from '@mui/material'


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
    <Stack>
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
      <Button onClick={handleOption}>
          Apply Grouping
      </Button>
    </Stack>
  );
}

export default Grouping;
