import React from "react";
import { Box, Button, Stack } from "@mui/material";
import {
  MRT_TableHeadCellSortLabel,
} from "material-react-table";

const Sorting = ({table, sortFn, clear}) => {

  const handleSortState = (header) => {
    sortFn({id: `${header.id}`, desc: false})
  }

  const handleClear = () => {
    clear();
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
      <Button onClick={handleClear}>Clear</Button>
    </Stack>
  );
};

export default Sorting;
