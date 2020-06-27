import React from 'react';


class Paper extends React.Component {
  render() {
    if (this.props.photos.length > 0) {
      return (
        <div>
          <p>{this.photos.length}</p>
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
}


export default Paper;
