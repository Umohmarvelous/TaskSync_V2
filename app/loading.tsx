
"use client"

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(true);
  };
  const handleOpen = () => {
    setOpen(false);
  };

  return (
    <div>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
        className='flex items-center justify-center flex-row space-x-3'

      >
        <CircularProgress color="inherit" /><h3>Loading...</h3>
      </Backdrop>
    </div>
  );
}

