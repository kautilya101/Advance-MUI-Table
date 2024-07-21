import React, { useState } from 'react';
import { Drawer, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Filtering, Sorting, Visibility,Grouping} from '../Components'

const SidePanel = ({table,
  option,
  toggleState,
  setToggle,
  setToggleState,
  handleSorting,
  handleGroupBy,
  clearVisibility,
  clearSort,
}) => {

  let component;



  switch(option){ 
    case 'sort': component = <Sorting table={table} sortFn={handleSorting} clear={clearSort}/> 
    break;
    case 'filter': component = <Filtering table={table}/>
      break;
    case 'visible': component = <Visibility table={table} clearVisibility={clearVisibility} toggle={setToggleState} />
      break;
    case 'groupBy': component = <Grouping setGroupBy={handleGroupBy} handleToggle={setToggleState}/>
      break;
    default: <Box>No Options</Box>
  }
  

  return (
    <>
     <Drawer
      anchor='right'
      open={toggleState}
      onClose={() => setToggleState(false)}
     >
      <Box sx={{ width: 350 , padding: '20px'}}>
        <Box display='flex' justifyContent='space-between' alignItems='center' >
          <Typography variant="h6" gutterBottom>
            Options
          </Typography>
          <IconButton onClick={() => setToggle(false)}><CloseIcon /></IconButton>
        </Box>
        {component}
      </Box>
     </Drawer> 
    </>
  );
}

export default SidePanel;
