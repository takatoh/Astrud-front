import React from 'react';


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
        <a href={`${endpoint}${photo.photo}`} key={photo.filename} >
          <img src={`${endpoint}${photo.thumbnail}`} alt={photo.filename} />
        </a>
      ))
    );
  }
}


export default Paper;
