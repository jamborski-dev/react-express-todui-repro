import React from 'react';

import GlobalStyles from './GlobalStyles';

import Grid from './components/Grid';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import ListView from './components/ListView';
import ContentView from './components/ContentView';
import Modal from './components/Modal';

import { TodoDataProvider } from './context/TodoDataContext';
import { ModalProvider } from './context/ModalContext';
import { DropdownProvider } from './context/DropdownContext';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Grid>
        <TodoDataProvider>
          <ModalProvider>
            <ModalProvider>
              <SideBar />
              <TopBar />
              <ListView />
              <ContentView />
              <Modal />
            </ModalProvider>
          </ModalProvider>
        </TodoDataProvider>
      </Grid>
    </>
  );
};

export default App;
