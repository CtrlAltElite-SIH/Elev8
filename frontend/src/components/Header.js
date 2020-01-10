// common header for each page
//jshint esversion:6
//the ablove line is to remove some warnings related to jshint
import React, { Component } from "react";

export default class Header extends Component {
  render() {
       /* jshint ignore:start */
    return (
      <div>
        <p>Welcome to Header Component!!</p>
      </div>
    );
     /* jshint ignore:end */
  }
}