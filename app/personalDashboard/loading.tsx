"use client"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(true);
  };


  return (
    <>
      <Backdrop
        open={open}
        onClick={handleClose}
        className='flex items-center justify-center flex-col space-y-4 text-white z-20 w-full sm:w-[71%] lg:w-[80%] xl:w-[80%] 2xl:w-[89%] justify-self-end'
      >
        <CircularProgress color="inherit"
          size={30}
          className='text-sm' /><h3 className="text-white font-semibold flex self-center justify-self-center">Loading...</h3>
      </Backdrop>
    </>
  );
}
