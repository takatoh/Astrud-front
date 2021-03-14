import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const Photo = (props) => {
  const classes = useStyles();

  return (
    <img
      src={props.photo}
      className={classes.photo}
      alt={filename(props.photo)}
      onClick={() => {props.close()}}
    />
  );
};

const filename = (photo) => {
  return photo.split("/").slice(-1)[0];
};

const useStyles = makeStyles((theme) => ({
  photo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '95vh',
    maxWidth: '95vw',
    border: 0,
    outline: 0,
  },
}));


export default Photo;
