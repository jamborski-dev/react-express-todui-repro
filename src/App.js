import React from 'react';

import GlobalStyles from './GlobalStyles';

import Grid from './components/Grid';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import ListView from './components/ListView';
import ContentView from './components/ContentView';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Grid>
        <SideBar />
        <TopBar />
        <ListView />
        <ContentView />
      </Grid>
    </>
  );
};

export default App;
