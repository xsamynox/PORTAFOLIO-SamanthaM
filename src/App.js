import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from '../src/views/home.js';
import Aboutme from '../src/views/aboutme.js';
import Projects from '../src/views/projects.js';
import Skills from '../src/views/skills.js';
import Contact from '../src/views/contact.js';
// import NotFoundPage from '../src/components/NoFound.jsx';
import './App.css';

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <Switch>
        <Route
          exact path=""
          render={() => <Home />} />
      </Switch>
      <Route
        exact path="aboutme"
        render={() => <Aboutme />} />
      <Route
        exact path="skills"
        render={() => <Skills />} />
      <Route
        exact path="projects"
        render={() => <Projects />} />
      <Route
        exact path="contact"
        render={() => <Contact />} />
      {/* <Route component={NotFoundPage} /> */}
    </Router >
  );
}

export default App;
