import React from 'react';
import { TreeItem } from '@material-ui/lab';


class Node extends React.Component {
  render() {
    return (
      <TreeItem
        nodeId={this.props.path}
        label={this.props.name}
      >
        {this.renderChildren(this.props.children, this.props.callback)}
      </TreeItem>
    );
  }

  renderChildren(children, callback) {
    if (children.length > 0) {
      return (
          children.map(c => (
            <Node
              name={c.name}
              path={c.path}
              children={c.children}
              callback={callback}
            />
          ))
      );
    } else {
      return;
    }
  }
}


export default Node;
