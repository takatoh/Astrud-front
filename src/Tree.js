import React from 'react';
import './Tree.css';
import Node from './Node';
import { Drawer, Divider, Typography } from '@material-ui/core';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import { TreeView } from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
  header: {
    height: 40,
    display: 'flex',
    alignItems: 'center',
  },
  list: {
    width: 250,
  }
});

const listNodeIds = (root) => {
  let ids = [root.path];
  if (root.children.length > 0) {
    ids = ids.concat(root.children.flatMap((c) => listNodeIds(c)));
  }
  return ids;
}

export default function Tree(props) {
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={(event) => props.closeTree()}
    >
      <div
        className={classes.list}
        role="presentation"
        onClick={(event) => props.closeTree()}
      >
        <div className={classes.header}>
          <FolderOpenIcon />
          <Typography>Folders</Typography>
        </div>
        <Divider />
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={listNodeIds(props.root)}
          onNodeSelect={(e, v) => props.callback(v)}
        >
          <Node
            name={props.root.name}
            path={props.root.path}
            children={props.root.children}
          />
        </TreeView>
      </div>
    </Drawer>
  );
}
