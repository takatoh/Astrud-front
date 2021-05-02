import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TreeItem } from '@material-ui/lab';
import PhotoIcon from '@material-ui/icons/Photo';
import Typography from '@material-ui/core/Typography';


const useTreeItemStyles = makeStyles((theme) => ({
  labelRoot: {
    display: 'flex',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    merginRight: theme.spacing(1),
  },
  labelText: {
    marginLeft: theme.spacing(0.75),
    fontWeight: 'inherit',
    flexGrow: 1,
  }
}))


const Node = (props) => {
  const classes = useTreeItemStyles()

  if (props.children.length > 0) {
    return (
      <TreeItem nodeId={props.path} label={props.name}>
        {renderChildren(props.children)}
      </TreeItem>
    );
  } else {
    return (
      <TreeItem
        nodeId={props.path}
        label={
          <div className={classes.labelRoot}>
            <PhotoIcon className={classes.labelIcon} />
            <Typography className={classes.labelText}>
              {props.name}
            </Typography>
          </div>
        }
      />
    );
  }
}

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


export default Node
