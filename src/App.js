import React from 'react';

import GlobalStyles from './GlobalStyles';

import Grid from './components/Grid';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import ListView from './components/ListView';
import ContentView from './components/ContentView';

import { TodoDataProvider } from './context/TodoDataContext';

const App = () => {
  return (
    <>
      <GlobalStyles />

        <Grid>
          <TodoDataProvider>
            <SideBar />
            <TopBar />
            <ListView />
            <ContentView />
          </TodoDataProvider>
        </Grid>
    </>
  );
};

export default App;
