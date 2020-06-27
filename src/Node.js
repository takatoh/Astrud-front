import React from 'react';


class Node extends React.Component {
  render() {
    return (
      <li key={this.props.name}>
        <span onClick={() => this.props.callback(this.props.path)} >
          {this.props.name}
        </span>
        {this.renderChildren(this.props.children, this.props.callback)}
      </li>
    );
  }

  renderChildren(children, callback) {
    if (children.length > 0) {
      return (
        <ul>
          {children.map(c => (
            <Node
              name={c.name}
              path={c.path}
              children={c.children}
              key={c.name}
              callback={callback}
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
