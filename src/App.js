import React from 'react';
import './App.css';
import Tree from './Tree.js';
import Paper from './Paper.js';


const fetchTree = (endpoint) => {
  return fetch(`$(endpoint)/tree`)
    .then(response => response.json());
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "http://localhost:8008",
      name: "Charlie",
      tree: {name: "", path: "", children: []},
      photos: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8008/tree")
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            tree: result
          });
        }
      );
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
          <Tree root={this.state.tree} />
          <Paper photos={this.state.photos} />
        </main>
      </div>
    );
  }
}


export default App;
