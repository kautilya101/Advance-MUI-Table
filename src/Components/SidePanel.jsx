import React, { useState } from 'react';
import { Drawer, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const SidePanel = ({component,heading,toggleState,setToggle,setToggleState}) => {
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
            {heading}
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
