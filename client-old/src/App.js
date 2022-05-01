import React from "react";

import GlobalStyles from "./GlobalStyles";

import { Grid } from "./components/shared/Grid";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import ListView from "./components/ListView";
import ContentView from "./components/ContentView";
import Modal from "./components/Modal";

import { TodoDataProvider } from "./context/TodoDataContext";
import { ModalProvider } from "./context/ModalContext";

const App = () => {
  return (
    <TodoDataProvider>
      <ModalProvider>
        <GlobalStyles />
        <Grid>
          <SideBar />
          <TopBar />
          <ListView />
          <ContentView />
          <Modal />
        </Grid>
      </ModalProvider>
    </TodoDataProvider>
  );
};

export default App;
