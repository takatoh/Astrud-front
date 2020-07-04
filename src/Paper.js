import React from 'react';
import './Paper.css';
import Photo from './Photo';


export default function Paper(props) {
  const renderPhotos = (photos, endpoint) => {
    return (
      photos.map(photo => (
        <Photo
          photo={`${endpoint}/${photo.photo}`}
          thumbnail={`${endpoint}/${photo.thumbnail}`}
          filename={photo.filename}
          key={photo.filename}
        />
      ))
    );
  }

  if (props.photos.length > 0) {
    return (
      <div className="Paper">
        {renderPhotos(props.photos, props.endpoint)}
      </div>
    );
  } else {
    return (
      <div className="Paper Paper-empty">
        <p>No photos</p>
      </div>
    )
  }
}
