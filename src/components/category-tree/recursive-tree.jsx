import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import Label from './label';

const RecursiveTree = ({ nodes, onAdd }) => {
  const renderTree = (node) => (
    <TreeItem label={<Label node={node} onAdd={onAdd} />} key={node.id} nodeId={node.id}>
      {node.children?.map(renderTree)}
    </TreeItem>
  );

  return nodes.map(renderTree);
};

export default RecursiveTree;
