import React from 'react';
import './App.css';
import Tree from './Tree';
import Paper from './Paper';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "http://localhost:8008",
      tree: {name: "", path: "", children: []},
      photos: [],
      classes: makeStyles(),
      treeOpen: false,
    };
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={this.state.classes.nemuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => this.setState({treeOpen: true})}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={this.state.classes.title}>
              Astrud
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Tree
            root={this.state.tree}
            callback={(path) => this.fetchPhotos(path)}
            open={this.state.treeOpen}
            closeTree={() => this.setState({treeOpen: false})}
          />
          <Paper
            photos={this.state.photos}
            endpoint={this.state.endpoint}
          />
        </main>
      </div>
    );
  }

  componentDidMount() {
    fetch(`${this.state.endpoint}/tree`)
      .then(response => response.json())
      .then(result => this.setState({tree: result}));
  }

  fetchPhotos(path) {
    fetch(`${this.state.endpoint}/dir/${path}`)
      .then(response => response.json())
      .then(result => this.setState({photos: result.photos}));
  }
}


export default App;
