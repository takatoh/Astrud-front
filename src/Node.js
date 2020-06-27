import React from 'react';


class Node extends React.Component {
  render() {
    return (
      <li key={this.props.name}>
        {this.props.name}
        {this.renderChildren(this.props.children)}
      </li>
    );
  }

  renderChildren(children) {
    if (children.length > 0) {
      return (
        <ul>
          {children.map(n => (
            <Node
              name={n.name}
              path={n.path}
              children={n.children}
              key={n.path}
            />
          ))}
        </ul>
      );
    } else {
      return;
    }
  }
}


export default Node;
