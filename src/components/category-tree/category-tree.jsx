import React, { useState } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useCategories from 'hooks/use-categories';
import RecursiveTree from './recursive-tree';
import IterativeTree from './iterative-tree';
import { initialCategories } from './constants';

const CategoryTree = () => {
  const [categories, addCategory] = useCategories(initialCategories);
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
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <Tree nodes={categories} key={isIterative ? 'i' : 'r'} onAdd={addCategory} />
          </TreeView>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryTree;
