import { Box, Button,  Stack, Switch, } from '@mui/material';
import { MRT_ShowHideColumnsMenuItems } from 'material-react-table';
import React, { useEffect, useState } from 'react';

const Visibility = ({table,clearVisibility}) => {
  const [allColumns,setColumns] = useState(table.getAllColumns())
  const clear = () => {
    clearVisibility()
  }

  return (
    <Stack>
      {allColumns.map((column) => (
        <Box key={column.id} sx={{ p: '10px',fontSize: 'large', fontWeight: 'bold' }}>
          <MRT_ShowHideColumnsMenuItems
            allColumns={allColumns}
            column={column}
            table={table}
          />
        </Box>
      ))}
      <Button variant='outlined' sx={{ padding: 1 }} onClick={clear}>Show All Columns</Button>
    </Stack>


  );
}

export default Visibility;
