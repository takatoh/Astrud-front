import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';


const Header = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.bar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.nemuButton}
          color="inherit"
          aria-label="menu"
          onClick={props.openTree}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" className={classes.title}>
          {props.title}
        </Typography>
        <IconButton
          edge="start"
          className={classes.navigateButton}
          color="inherit"
          aria-label="before"
          onClick={props.openPrevFolder}
        >
          <NavigateBefore />
        </IconButton>
        <IconButton
          edge="start"
          className={classes.navigateButton}
          color="inherit"
          aria-label="next"
          onClick={props.openNextFolder}
        >
          <NavigateNext />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    flexGrow: 1,
    backgroundColor: "#282c34",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  navigateButton: {
    marginRight: theme.spacing(2),
  },
}));


export default Header
