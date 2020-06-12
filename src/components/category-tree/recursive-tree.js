import React from 'react';
import { v4 as uuid } from 'uuid'
import TreeItem from '@material-ui/lab/TreeItem';

const RecursiveTree = ({categories}) => {

  return categories.map(category => {
    const id = uuid();

    return (
      <TreeItem key={id} label={category.label} nodeId={id} >
        {category.children && (
          <RecursiveTree categories={category.children} />
        )}
      </TreeItem>
    );
  })
}

export default RecursiveTree;
