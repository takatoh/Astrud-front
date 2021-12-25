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
          className={ [classes.navigateButton, classes.navigatePrev].join(' ') }
          aria-label="prev"
          onClick={ props.openPrevPhoto }
        >
          <ArrowBackIos fontSize="large" />
        </IconButton>
        <Photo photo={ props.photo } close={ props.handleClose } />
        <IconButton
          edge="start"
          className={ [classes.navigateButton, classes.navigateNext].join(' ') }
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
  navigateButton: {
    height: '100px',
    width: '100px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#ffffff',
  },
  navigatePrev: {
    left: '0%',
  },
  navigateNext: {
    right: '0%',
  },
}));


export default PhotoPlate
