import React from 'react';
import './Photo.css';


class Photo extends React.Component {
  render() {
    return (
      <figure>
        <a href={this.props.photo} target="_blank" key={this.props.filename} >
          <img src={this.props.thumbnail} alt={this.props.filename} />
        </a>
      </figure>
    );
  }
}


export default Photo;
