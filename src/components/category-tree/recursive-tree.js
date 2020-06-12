import React from 'react';
import {v4 as uuid} from 'uuid'
import TreeItem from '@material-ui/lab/TreeItem';

const RecursiveTree = ({categories}) => (
  categories.map((category, index) => (
      <TreeItem key={index} label={category.label} nodeId={uuid()}>
        {category.children && (
          <RecursiveTree categories={category.children}/>
        )}
      </TreeItem>
    )
  )
);

export default RecursiveTree;
