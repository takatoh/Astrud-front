import React from 'react';
import Header from './Header';
import Tree from './Tree';
import Paper from './Paper';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: process.env.REACT_APP_API_ENDPOINT,
      tree: { name: "", path: "", children: [] },
      pathList: [],
      path: "",
      photos: [],
      treeOpen: false,
    };
  }

  render() {
    return (
      <div className="App" >
        <Header
          title={ process.env.REACT_APP_SITE_TITLE }
          openTree={ () => this.setState({ treeOpen: true }) }
          openNextFolder={ () => {
            const next = this.nextPath();
            this.setState({ path: next });
            this.fetchPhotos(next);
          } }
          openPrevFolder={ () => {
            const prev = this.prevPath();
            this.setState({ path: prev });
            this.fetchPhotos(prev);
          } }
        />
        <Tree
          root={ this.state.tree }
          openFolder={ path => {
            this.setState({ path: path });
            this.fetchPhotos(path);
          } }
          open={ this.state.treeOpen }
          closeTree={ () => this.setState({ treeOpen: false }) }
        />
        <Paper
          path={ this.state.path }
          photos={ this.state.photos }
          endpoint={ this.state.endpoint }
        />
      </div>
    );
  }

  componentDidMount() {
    document.title = process.env.REACT_APP_SITE_TITLE;
    fetch(`${this.state.endpoint}/tree`)
      .then(response => response.json())
      .then(result => {
        this.setState({
          tree: result,
          pathList: listPaths(result),
        })
      });
  }

  fetchPhotos(path) {
    fetch(`${this.state.endpoint}/dir/${path}`)
      .then(response => response.json())
      .then(result => this.setState({photos: result.photos}));
  }

  prevPath() {
    let idx = this.state.pathList.indexOf(this.state.path);
    if (idx > 0) {
      idx -= 1;
    }
    return this.state.pathList[idx];
  }

  nextPath() {
    let idx = this.state.pathList.indexOf(this.state.path);
    if (idx < this.state.pathList.length - 1) {
      idx += 1;
    }
    return this.state.pathList[idx];
  }
}


const listPaths = (tree) => {
  const paths = tree.children.map(c => listPaths(c)).flat();
  if (tree.hasPhotos) {
    paths.unshift(tree.path);
  }
  return paths;
}


export default App;
