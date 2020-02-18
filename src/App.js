import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';

import Header from "./components/Header"
import Home from "./components/Home"
import Compose from "./components/Compose"

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/compose">
          <Compose />
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
