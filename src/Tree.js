import React from 'react';
import './Tree.css';
import Node from './Node.js';


class Tree extends React.Component {
  render() {
    return (
      <div className="App-tree">
      <ul>
        <Node
          name={this.props.root.name}
          path={this.props.root.path}
          children={this.props.root.children}
          key={this.props.root.name}
        />
      </ul>
      </div>
    );
  }
}


export default Tree;
