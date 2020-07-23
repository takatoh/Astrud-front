import React from 'react';
import './Paper.css';
import Photo from './Photo';
import { Container, Typography, Breadcrumbs } from '@material-ui/core';


const renderPhotos = (photos, endpoint) => {
  return (
    photos.map(photo =>
      <Photo
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
  return ancestors.map(text => <Typography key={text}>{text}</Typography>);
}

export default function Paper(props) {
  if (props.photos.length > 0) {
    return (
      <div className="Paper">
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb">
            {renderBreadcrumbs(props.path)}
          </Breadcrumbs>
          {renderPhotos(props.photos, props.endpoint)}
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
