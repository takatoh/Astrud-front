import React from 'react';
import { TreeItem } from '@material-ui/lab';


const renderChildren = (children) => {
  if (children.length > 0) {
    return (
      children.map(c =>
        <Node name={c.name} path={c.path} children={c.children} key={c.path} />
      )
    );
  } else {
    return;
  }
}

export default function Node(props) {
  return (
    <TreeItem nodeId={props.path} label={props.name}>
      {renderChildren(props.children)}
    </TreeItem>
  );
}
