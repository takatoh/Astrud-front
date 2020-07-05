import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = (theme) => {
  return (
    makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }))
  );
}

export default function Header(props) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.nemuButton}
          color="inherit"
          aria-label="menu"
          onClick={props.callback}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" className={classes.title}>
          Astrud
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
