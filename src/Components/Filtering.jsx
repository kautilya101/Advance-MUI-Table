import React from 'react';
import {
  MRT_TableHeadCellFilterContainer
} from "material-react-table";
import { Box, Stack,Button } from '@mui/material';

const Filtering = ({table,clearFilters}) => {
  return (
    <Stack p="8px" gap="20px">
          {table.getLeafHeaders()
          .map((header) => (
            <Box key={header.id} sx={{ fontSize: 'large', fontWeight: 'bold'}}>
              {header.column.columnDef.header}
              <MRT_TableHeadCellFilterContainer
                header={header}
                table={table}
                in
              />
            </Box>
          ))}
          <Button variant='outlined' sx={{ padding: 1 }} onClick={clearFilters}>Clear Filters</Button>
    </Stack>
  );
}

export default Filtering;
