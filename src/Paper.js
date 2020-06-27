import React from 'react';


class Paper extends React.Component {
  render() {
    if (this.props.photos.length > 0) {
      return (
        <div>
          <p>{this.renderPhotos(this.props.photos)}</p>
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

  renderPhotos(photos) {
    return (
      photos.map(photo => (
        <a href={`http://localhost:8008${photo.photo}`}>
          <img src={`http://localhost:8008${photo.thumbnail}`} />
        </a>
      ))
    );
  }
}


export default Paper;
