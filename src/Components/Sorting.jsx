import React from "react";
import { Box, Button, Stack } from "@mui/material";
import {
  MRT_TableHeadCellSortLabel,
} from "material-react-table";

const Sorting = ({table, sortFn, clearSort}) => {

  const handleSortState = (header) => {
    sortFn({id: `${header.id}`, desc: false})
  }

  const handleClear = () => {
    clearSort();
  }
  return (
    <Stack p="8px" gap="20px">
      {table.getLeafHeaders().map((header) => (
        <Box key={header.id} 
        sx={{ p: '10px', fontSize: 'large', fontWeight: 'bold' }}>
        {header.column.columnDef.header}
        <MRT_TableHeadCellSortLabel 
          header={header} 
          table={table}
          onClick={ () => handleSortState(header)}
          />
        </Box>
      ))}
      <Button variant='outlined' sx={{ padding: 1 }} onClick={handleClear}>Clear Sort</Button>
    </Stack>
  );
};

export default Sorting;
