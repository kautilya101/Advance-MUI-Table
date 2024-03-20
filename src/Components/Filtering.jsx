import React from 'react';
import {
  MRT_TableHeadCellFilterContainer
} from "material-react-table";
import { Box, Stack } from '@mui/material';

const Filtering = ({table}) => {
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
    </Stack>
  );
}

export default Filtering;
