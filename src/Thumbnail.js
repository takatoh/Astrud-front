import React from 'react';
import './Thumbnail.css';


const Thumbnail = (props) => {
  return (
    <div className="Photo-box">
      <figure>
        <img src={props.thumbnail} alt={props.filename} />
      </figure>
    </div>
  );
}


export default Thumbnail
