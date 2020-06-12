import React from 'react'
import TreeItem from '@material-ui/lab/TreeItem';
import {v4 as uuid} from 'uuid';

const IterativeTree = ({categories}) => {
  const renderTree = ({label, children}, index) => (
    <TreeItem label={label} key={index} nodeId={uuid()}>
      {children?.map(renderTree)}
    </TreeItem>
  )

  return categories.map(renderTree)
}

export default IterativeTree;
