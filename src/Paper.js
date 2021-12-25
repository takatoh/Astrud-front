import React, { useState } from 'react';
import Thumbnail from './Thumbnail';
import ThumbnailMobile from './ThumbnailMobile';
import MediaQuery from 'react-responsive';
import Photo from './Photo';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


const Paper = (props) => {
  const [open, setOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState("");
  const classes = useStyles();

  const handleOpen = (photo) => {
    setCurrentPhoto(photo);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const openPrevPhoto = () => {
    const curr =  currentPhoto.replace(`${props.endpoint}/`, '');
    const idx = props.photos.findIndex((p) => p.photo == curr);
    if (0 < idx) {
      setCurrentPhoto(`${props.endpoint}/${props.photos[idx - 1].photo}`);
    }
  };
  const openNextPhoto = () => {
    const curr =  currentPhoto.replace(`${props.endpoint}/`, '');
    const idx = props.photos.findIndex((p) => p.photo == curr);
    if (idx < props.photos.length - 1) {
      setCurrentPhoto(`${props.endpoint}/${props.photos[idx + 1].photo}`);
    }
  };

  if (props.photos.length > 0) {
    return (
      <div className={ classes.root }>
        <Container maxWidth="lg">
          { renderBreadcrumbs(props.path) }
          { renderThumbnails(props.photos, props.endpoint, handleOpen) }
          <Modal
            open={ open }
            onClose={ handleClose }
            aria-labelledby="photo-modal-title"
            aria-describedby="photo-modal-description"
          >
            <div>
              <IconButton
                edge="start"
                className={ classes.navigatePrev }
                aria-label="prev"
                onClick={ openPrevPhoto }
              >
                <ArrowBackIos
                  fontSize="large"
                />
              </IconButton>
              <Photo photo={ currentPhoto } close={ handleClose } />
              <IconButton
                edge="start"
                className={ classes.navigateNext }
                aria-label="next"
                onClick={ openNextPhoto }
              >
                <ArrowForwardIos
                  fontSize="large"
                />
              </IconButton>
            </div>
          </Modal>
        </Container>
      </div>
    );
  } else {
    return (
      <div className={ classes.empty }>
        <p>No photos</p>
      </div>
    );
  }
}

const renderThumbnails = (photos, endpoint, handleOpen) => {
  return (
    photos.map(photo =>
      <div>
        <MediaQuery query="(max-width: 767px)">
          <ThumbnailMobile
            photo={ `${endpoint}/${photo.photo}` }
            thumbnail={ `${endpoint}/${photo.thumbnail}` }
            filename={ photo.filename }
            key={ photo.filename }
            handleClick={ photo => handleOpen(photo) }
          />
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <Thumbnail
            photo={ `${endpoint}/${photo.photo}` }
            thumbnail={ `${endpoint}/${photo.thumbnail}` }
            filename={ photo.filename }
            key={ photo.filename }
            handleClick={ photo => handleOpen(photo) }
          />
        </MediaQuery>
      </div>
    )
  );
}

const renderBreadcrumbs = (path) => {
  const ancestors = path.split("/");
  return (
    <Breadcrumbs aria-label="breadcrumb">
      { ancestors.map(text => <Typography key={ text } >{ text }</Typography>) }
    </Breadcrumbs>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 80,
  },
  empty: {
    marginTop: 80,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateY(-50%) translateX(-50%)',
    fontSize: 60,
    color: '#bbbbbb',
  },
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


export default Paper
