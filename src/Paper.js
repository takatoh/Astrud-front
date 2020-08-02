import React from 'react';
import './Paper.css';
import Thumbnail from './Thumbnail';
import { Container, Typography, Breadcrumbs } from '@material-ui/core';


const Paper = (props) => {
  if (props.photos.length > 0) {
    return (
      <div className="Paper">
        <Container maxWidth="lg">
          {renderBreadcrumbs(props.path)}
          {renderThumbnails(props.photos, props.endpoint)}
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

const renderThumbnails = (photos, endpoint) => {
  return (
    photos.map(photo =>
      <Thumbnail
        photo={`${endpoint}/${photo.photo}`}
        thumbnail={`${endpoint}/${photo.thumbnail}`}
        filename={photo.filename}
        key={photo.filename}
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
