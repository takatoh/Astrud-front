import React, { useState } from 'react';
import Thumbnail from './Thumbnail';
import ThumbnailMobile from './ThumbnailMobile';
import MediaQuery from 'react-responsive';
import Photo from './Photo';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Modal from '@material-ui/core/Modal';
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
            <Photo photo={ currentPhoto } close={ handleClose } />
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
}));


export default Paper
