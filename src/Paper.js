import React, { useState } from 'react';
import './Paper.css';
import Thumbnail from './Thumbnail';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


const Paper = (props) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => { setOpen(true); };
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
            <div style={modalStyle} className={classes.paper}>
              Modal window
            </div>
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
        handleClick={() => handleOpen()}
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

const getModalStyle = () => {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000000',
    padding: theme.spacing(2),
  },
}));


export default Paper
