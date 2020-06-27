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
          {children.map(c => (
            <Node
              name={c.name}
              path={c.path}
              children={c.children}
              key={c.name}
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
