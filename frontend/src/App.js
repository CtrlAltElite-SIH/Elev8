//jshint esversion :6

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./components/Post";
import Blogs from "./components/Blogs";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import List from "./components/List";
import Home from "./components/Home";
class App extends Component {
  render() {
    /* jshint ignore:start */
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              Elev8
            </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/Post" className="nav-link">
                    Create Blog
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={Home} />
          <Route path="/user/:id" component={Profile} />
          <Route path="/home" component={Feed} />
          <Route path="/Mentors" component={List} />
          <Route path="/Internships" component={List} />
          <Route path="/:userId/Post" component={Post} />
          <Route path="/blogs" component={Blogs} />
        </div>
      </Router>
    );
    /* jshint ignore:end */
  }
}
export default App;