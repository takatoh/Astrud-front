import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const PhotoModal = (props) => {
  const classes = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(0),
    },
    photo: {
      maxHeight: '95vh',
      maxWidth: '95vw',
    },
  }))();

  return (
    <div className={classes.paper}>
      <img src={props.photo} className={classes.photo} />
    </div>
  );
};


export default PhotoModal;
