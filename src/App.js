import React from 'react';
import Header from './Header';
import Tree from './Tree';
import Paper from './Paper';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: process.env.REACT_APP_API_ENDPOINT,
      tree: {name: "", path: "", children: []},
      path: "",
      photos: [],
      treeOpen: false,
    };
  }

  render() {
    return (
      <div className="App">
        <Header
          title={process.env.REACT_APP_SITE_TITLE}
          openTree={() => this.setState({treeOpen: true})}
        />
        <Tree
          root={this.state.tree}
          openFolder={(path) => {
            this.setState({path: path});
            this.fetchPhotos(path);
          }}
          open={this.state.treeOpen}
          closeTree={() => this.setState({treeOpen: false})}
        />
        <Paper
          path={this.state.path}
          photos={this.state.photos}
          endpoint={this.state.endpoint}
        />
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
