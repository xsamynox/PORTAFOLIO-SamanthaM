import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          render={() => } />
      </Switch>
    </Router>
  );
}

export default App;
