import React from 'react';
import Node from './Node.js';


class Tree extends React.Component {
  render() {
    return (
      <ul>
        <Node
          name={this.props.root.name}
          path={this.props.root.path}
          children={this.props.root.children}
          key={this.props.root.name}
        />
      </ul>
    );
  }
}


export default Tree;
