import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const Thumbnail = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <figure className={classes.figure}>
        <img
          src={props.thumbnail}
          alt={props.filename}
          onClick={() => props.handleClick(props.photo)}
          className={classes.img}
        />
      </figure>
    </div>
  );
}

const useStyles = makeStyles({
  box: {
    float: 'left',
    textAlign: 'center',
  },
  figure: {
    height: 200,
    width: 200,
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  img: {
    border: 'solid 1px #dddddd',
  }
});


export default Thumbnail
