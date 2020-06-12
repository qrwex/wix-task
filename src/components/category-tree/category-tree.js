import React, {useState} from 'react';
import TreeView from '@material-ui/lab/TreeView';
import IterativeTree from './iterative-tree';
import RecursiveTree from './recursive-tree';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Box} from '@material-ui/core';

const CategoryTree = () => {
  const initialCategories = [
    [
      'Lorem',
      [
        'Ipsum',
        'Dolor',
        [
          'Orci',
          [
            'Quis',
            [
              'Odio'
            ]
          ]
        ]
      ]
    ]
  ]

  const [categories, setCategories] = useState(initialCategories);
  const [isIterative, setIterative] = useState(false)

  const toggleMode = () => {
    setIterative(!isIterative)
  }

  const Component = isIterative ? IterativeTree : RecursiveTree;

  return (
    <Box p={2}>
      <Grid container spacing={2} alignItems='center'>
        <Grid item>
          <Typography>
            Recursive
          </Typography>
        </Grid>
        <Grid item>
          <Switch
            checked={isIterative}
            onChange={toggleMode}
          />
        </Grid>
        <Grid item>
          <Typography>
            Iterative
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TreeView>
            <Component categories={categories}/>
          </TreeView>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CategoryTree;
