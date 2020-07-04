import React from 'react';
import './Tree.css';
import Node from './Node';


class Tree extends React.Component {
  render() {
    return (
      <div className="Tree">
      <ul className="Tree-ul">
        <Node
          name={this.props.root.name}
          path={this.props.root.path}
          children={this.props.root.children}
          key={this.props.root.name}
          callback={this.props.callback}
        />
      </ul>
      </div>
    );
  }
}


export default Tree;
