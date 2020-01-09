//jshint esversion :6

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
    <div className="container">
      <h2>Elev8 App</h2>
    </div>
    <Route path="/" exact component={Home} />
    <Route path="/user/:id" component={profile} />
    <Route path="/home" component={Feed} />
    <Route path="/Mentors" component={Mentors} />
    <Route path="/Internships" component={Internships} />
  </Router>
  );
}

export default App;
