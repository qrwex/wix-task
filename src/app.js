import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CategoryTree from './components/category-tree';

const theme = createMuiTheme();

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CategoryTree/>
    </MuiThemeProvider>
  );
}

export default App;
