import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const PhotoModal = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <img src={props.photo} className={classes.photo} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
  },
  photo: {
    maxHeight: '95vh',
    maxWidth: '95vw',
    border: 0,
    outline: 0,
  },
}));


export default PhotoModal;
