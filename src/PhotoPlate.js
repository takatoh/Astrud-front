import React from 'react';
import Photo from './Photo';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


const PhotoPlate = (props) => {
  const classes = useStyles();

  return (
    <Modal
      open={ props.open }
      onClose={ props.handleClose }
      aria-labelledby="photo-modal-title"
      aria-describedby="photo-modal-description"
    >
      <div>
        <IconButton
          edge="start"
          className={ classes.navigatePrev }
          aria-label="prev"
          onClick={ props.openPrevPhoto }
        >
          <ArrowBackIos fontSize="large" />
        </IconButton>
        <Photo photo={ props.photo } close={ props.handleClose } />
        <IconButton
          edge="start"
          className={ classes.navigateNext }
          aria-label="next"
          onClick={ props.openNextPhoto }
        >
          <ArrowForwardIos fontSize="large" />
        </IconButton>
      </div>
    </Modal>
    );
}

const useStyles = makeStyles(theme => ({
  navigatePrev: {
    height: '100px',
    width: '100px',
    position: 'absolute',
    top: '50%',
    left: '0%',
    transform: 'translateY(-50%)',
    color: '#ffffff',
  },
  navigateNext: {
    height: '100px',
    width: '100px',
    position: 'absolute',
    top: '50%',
    right: '0%',
    transform: 'translateY(-50%)',
    color: '#ffffff',
  },
}));


export default PhotoPlate
