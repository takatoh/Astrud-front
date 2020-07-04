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

  const [state, setState] = React.useState({
    left: true,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, ["left"]: open });
  };

    return (
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer(false)}
      >
        <div
          className={clsx(classes.list, {})}
          role="presentation"
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
