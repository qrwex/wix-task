import React from 'react'
import TreeItem from '@material-ui/lab/TreeItem';
import {v4 as uuid} from 'uuid';

const IterativeTree = ({categories}) => {
  const render = (category) => {
    return (
      <TreeItem label={category.label} nodeId={uuid()}>
        {category.children && category.children.map(render)}
      </TreeItem>
    )
  }

  return categories.map((category, index) => {
    return (
      <React.Fragment key={index}>
        {render(category)}
      </React.Fragment>
    )
  })
}

export default IterativeTree;
