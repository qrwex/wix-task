import React from 'react'
import TreeItem from '@material-ui/lab/TreeItem';
import {v4 as uuid} from 'uuid';

const IterativeTree = ({categories}) => {
  const renderTree = (category, index) => (
    <TreeItem label={category.label} key={index} nodeId={uuid()}>
      {category.children && category.children.map(renderTree)}
    </TreeItem>
  )

  return categories.map((category, index) => {
    return (
      <React.Fragment key={index}>
        {renderTree(category)}
      </React.Fragment>
    )
  })
}

export default IterativeTree;
