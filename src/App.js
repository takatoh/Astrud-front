import React, { useState, useEffect } from 'react';
import Header from './Header';
import Tree from './Tree';
import Paper from './Paper';


const App = () => {
  const siteTitle = process.env.REACT_APP_SITE_TITLE;
  const endpoint = process.env.REACT_APP_API_ENDPOINT;
  const [tree, setTree] = useState({ name: '', path: '', children: [] });
  const [pathList, setPathList] = useState([]);
  const [path, setPath] = useState('');
  const [photos, setPhotos] = useState([]);
  const [treeOpen, setTreeOpen] = useState(false);

  useEffect(() => {
    document.title = siteTitle;
    fetch(`${endpoint}/tree`)
      .then(response => response.json())
      .then(result => {
        setTree(result);
        setPathList(listPaths(result));
        });
  }, []);

  const fetchPhotos = (path) => {
    fetch(`${endpoint}/dir/${path}`)
      .then(response => response.json())
      .then(result => setPhotos(result.photos));
  };

  const prevPath = () => {
    let idx = pathList.indexOf(path);
    if (idx > 0) {
      idx -= 1;
    }
    return pathList[idx];
  }

  const nextPath = () => {
    let idx = pathList.indexOf(path);
    if (idx < pathList.length - 1) {
      idx += 1;
    }
    return pathList[idx];
  }

  return (
    <div className="App" >
      <Header
        title={ process.env.REACT_APP_SITE_TITLE }
        openTree={ () => setTreeOpen(true) }
        openNextFolder={ () => {
          const next = nextPath();
          setPath(next);
          fetchPhotos(next);
        } }
        openPrevFolder={ () => {
          const prev = prevPath();
          setPath(prev);
          fetchPhotos(prev);
        } }
      />
      <Tree
        root={ tree }
        openFolder={ path => {
          setPath(path);
          fetchPhotos(path);
        } }
        open={ treeOpen }
        closeTree={ () => setTreeOpen(false) }
      />
      <Paper
        path={ path }
        photos={ photos }
        endpoint={ endpoint }
      />
    </div>
  );
};

const listPaths = (tree) => {
  const paths = tree.children.map(c => listPaths(c)).flat();
  if (tree.hasPhotos) {
    paths.unshift(tree.path);
  }
  return paths;
}


export default App;
