import React from 'react';
import {
  MRT_ShowHideColumnsMenuItems,
  MRT_TableHeadCellFilterContainer
} from "material-react-table";
import { Stack } from '@mui/material';

const Filtering = ({table}) => {
  return (
    <Stack p="8px" gap="20px">
          {table.getLeafHeaders()
          .map((header) => (
            <MRT_TableHeadCellFilterContainer
              key={header.id}
              header={header}
              table={table}
              in
            />
          ))}
    </Stack>
  );
}

export default Filtering;
