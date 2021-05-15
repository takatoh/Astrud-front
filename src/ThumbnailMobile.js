import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const ThumbnailMobile = (props) => {
  const classes = useStyles();

  return (
    <div className={ classes.box } >
      <figure className={ classes.figure } >
        <img
          src={ props.thumbnail }
          alt={ props.filename }
          onClick={ () => props.handleClick(props.photo) }
          className={ classes.img }
        />
      </figure>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  box: {
    float: 'left',
    textAlign: 'center',
  },
  figure: {
    height: '45vmin',
    width: '45vmin',
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  img: {
    height: '40vmin',
    width: '40vmin',
    objectFit: 'cover',
    border: 'solid 1px #dddddd',
  }
}));


export default ThumbnailMobile
