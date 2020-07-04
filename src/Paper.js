import React from 'react';
import './Paper.css';
import Photo from './Photo';


class Paper extends React.Component {
  render() {
    if (this.props.photos.length > 0) {
      return (
        <div className="Paper">
          {this.renderPhotos(this.props.photos, this.props.endpoint)}
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

  renderPhotos(photos, endpoint) {
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
}


export default Paper;
