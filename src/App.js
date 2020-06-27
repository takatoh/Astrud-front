import React from 'react';
import './App.css';
import Tree from './Tree';
import Paper from './Paper';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "http://localhost:8008",
      tree: {name: "", path: "", children: []},
      photos: []
    };
  }

  componentDidMount() {
    fetch(`${this.state.endpoint}/tree`)
      .then(response => response.json())
      .then(result => this.setState({tree: result}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Astrud
          </p>
        </header>
        <main>
          <Tree
            root={this.state.tree}
            callback={(path) => this.fetchPhotos(path)}
          />
          <Paper
            photos={this.state.photos}
            endpoint={this.state.endpoint}
          />
        </main>
      </div>
    );
  }

  fetchPhotos(path) {
    fetch(`${this.state.endpoint}/dir/${path}`)
      .then(response => response.json())
      .then(result => this.setState({photos: result.photos}));
  }
}


export default App;
