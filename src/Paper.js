import React from 'react';
import Photo from './Photo';


class Paper extends React.Component {
  render() {
    if (this.props.photos.length > 0) {
      return (
        <div>
          <p>{this.renderPhotos(this.props.photos, this.props.endpoint)}</p>
        </div>
      );
    } else {
      return (
        <div>
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
        />
      ))
    );
  }
}


export default Paper;
