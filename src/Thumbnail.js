import React from 'react';
import './Thumbnail.css';


const Thumbnail = (props) => {
  return (
    <div className="Photo-box">
      <figure>
        <a
          href={props.photo}
          target="_blank"
          rel="noopener noreferrer"
          key={props.filename}
        >
          <img src={props.thumbnail} alt={props.filename} />
        </a>
      </figure>
    </div>
  );
}


export default Thumbnail
