import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const PhotoModal = (props) => {
  const classes = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000000',
      padding: theme.spacing(2),
    },
  }))();

  return (
    <div className={classes.paper}>
      Modal Photo window
    </div>
  );
};


export default PhotoModal;
