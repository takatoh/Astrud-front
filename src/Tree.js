import React from 'react';
import './Tree.css';
import Node from './Node';
import clsx from 'clsx';
import { Drawer } from '@material-ui/core';


export default function Tree(props) {
  const classes = {
    list: {
      width: 250,
    },
  };

  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={(event) => props.closeTree()}
    >
      <div
        className={clsx(classes.list, {})}
        role="presentation"
        onClick={(event) => props.closeTree()}
      >
        <ul className="Tree-ul">
          <Node
            name={props.root.name}
            path={props.root.path}
            children={props.root.children}
            key={props.root.name}
            callback={props.callback}
          />
        </ul>
      </div>
    </Drawer>
  );
}
