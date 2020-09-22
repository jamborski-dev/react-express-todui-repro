import { todos } from './__mock-data';

import React from 'react';

import GlobalStyles from './GlobalStyles';

import Grid from './components/Grid';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import ListView from './components/ListView';
import ContentView from './components/ContentView';

import { TodoDataContext } from './context/TodoDataContext';

const App = () => {
  return (
    <>
      <GlobalStyles />

      <TodoDataContext.Provider value={todos}>
        <Grid>
          <SideBar />
          <TopBar />
          <ListView />
          <ContentView />
        </Grid>
      </TodoDataContext.Provider>
    </>
  );
};

export default App;
