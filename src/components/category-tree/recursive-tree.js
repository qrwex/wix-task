import React from 'react';
import { v4 as uuid } from 'uuid'
import TreeItem from '@material-ui/lab/TreeItem';

const RecursiveTree = ({categories}) => {

  return categories.map(category => {
    const id = uuid();

    return Array.isArray(category) ?
      <RecursiveTree categories={category} key={id} /> : <TreeItem key={id} label={category} nodeId={id} />
  })
}

export default RecursiveTree;
