import React from 'react';
import {v4 as uuid} from 'uuid'
import TreeItem from '@material-ui/lab/TreeItem';

const RecursiveTree = ({categories}) => (
  categories.map(({label, children}, index) => (
      <TreeItem key={index} label={label} nodeId={uuid()}>
        {children && (
          <RecursiveTree categories={children}/>
        )}
      </TreeItem>
    )
  )
);

export default RecursiveTree;
