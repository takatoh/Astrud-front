import React, { useState } from 'react';
import './Paper.css';
import Thumbnail from './Thumbnail';
import PhotoModal from './PhotoModal';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Modal from '@material-ui/core/Modal';


const Paper = (props) => {
  const [open, setOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState("");

  const handleOpen = (photo) => {
    setCurrentPhoto(photo);
    setOpen(true);
  };
  const handleClose = () => { setOpen(false); };

  if (props.photos.length > 0) {
    return (
      <div className="Paper">
        <Container maxWidth="lg">
          {renderBreadcrumbs(props.path)}
          {renderThumbnails(props.photos, props.endpoint, handleOpen)}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="photo-modal-title"
            aria-describedby="photo-modal-description"
          >
            <PhotoModal photo={currentPhoto} />
          </Modal>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="Paper Paper-empty">
        <p>No photos</p>
      </div>
    );
  }
}

const renderThumbnails = (photos, endpoint, handleOpen) => {
  return (
    photos.map(photo =>
      <Thumbnail
        photo={`${endpoint}/${photo.photo}`}
        thumbnail={`${endpoint}/${photo.thumbnail}`}
        filename={photo.filename}
        key={photo.filename}
        handleClick={(photo) => handleOpen(photo)}
      />
    )
  );
}

const renderBreadcrumbs = (path) => {
  const ancestors = path.split("/");
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {ancestors.map(text => <Typography key={text}>{text}</Typography>)}
    </Breadcrumbs>
  );
}


export default Paper
