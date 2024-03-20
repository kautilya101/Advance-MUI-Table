import React, { useState } from 'react';
import { Drawer, Box, Stack } from '@mui/material';
import {
  MRT_ShowHideColumnsMenuItems,
  MRT_TableHeadCellFilterContainer
} from "material-react-table";

const SidePanel = ({component,table,toggleState,setToggleState}) => {
  // const [toggleState,setToggleState] = useState(false)
  return (
    <>
     <Drawer
      anchor='right'
      open={toggleState}
      onClose={() => setToggleState(false)}
     >
      <Box sx={{ width: 350 , padding: '20px'}}>
        {component}
      </Box>
     </Drawer> 
    </>
  );
}

export default SidePanel;
