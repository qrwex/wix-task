import React, {useState} from 'react';
import TreeView from '@material-ui/lab/TreeView';
import IterativeTree from './iterative-tree';
import RecursiveTree from './recursive-tree';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Box} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const CategoryTree = () => {
  const initialCategories = [
    {
      label: 'Lorem',
      children: [
        {
          label: 'Ipsum',
        },
        {
          label: 'Dolor',
          children: [
            {
              label: 'Quis',
              children: [
                {
                  label: 'Odio'
                }
              ]
            }
          ]
        },
        {
          label: 'Sit',
          children: [
            {
              label: 'Amet'
            },
            {
              label: 'Consectetur'
            }
          ]
        },
        {
          label: 'Adipiscing',
          children: [
            {
              label: 'Elit',
              children: [
                {
                  label: 'Vestibulum'
                },
                {
                  label: 'Vitae'
                },
              ]
            },
          ]
        }
      ]
    }
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
          <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
            <Component categories={categories}/>
          </TreeView>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CategoryTree;
