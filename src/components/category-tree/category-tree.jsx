import React, { useState } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import {
  Switch, Box, Typography, Grid,
} from '@material-ui/core';
import { ExpandMore, ChevronRight } from '@material-ui/icons';
import useCategories from 'hooks/use-categories';
import RecursiveTree from './recursive-tree';
import IterativeTree from './iterative-tree';
import { initialCategories } from './constants';

const CategoryTree = () => {
  const [categories, addCategory, removeCategory] = useCategories(initialCategories);
  const [isIterative, setIterative] = useState(false);

  const toggleMode = () => {
    setIterative(!isIterative);
  };

  const Tree = isIterative ? IterativeTree : RecursiveTree;

  return (
    <Box p={2}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography>
            Recursive
          </Typography>
        </Grid>
        <Grid item>
          <Switch checked={isIterative} onChange={toggleMode} />
        </Grid>
        <Grid item>
          <Typography>
            Iterative
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TreeView
            defaultCollapseIcon={<ExpandMore />}
            defaultExpandIcon={<ChevronRight />}
          >
            <Tree nodes={categories} key={isIterative ? 'i' : 'r'} onAdd={addCategory} onDelete={removeCategory} />
          </TreeView>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryTree;
