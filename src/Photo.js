import React from 'react';
import './Photo.css';


export default function Photo(props) {
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
