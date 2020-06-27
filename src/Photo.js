import React from 'react';


class Photo extends React.Component {
  render() {
    return (
      <a href={this.props.photo} target="_blank" key={this.props.filename} >
        <img src={this.props.thumbnail} alt={this.props.filename} />
      </a>
    );
  }
}


export default Photo;
