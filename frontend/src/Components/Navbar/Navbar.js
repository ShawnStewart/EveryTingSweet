import React, { Component } from "react";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar ets-container">
        <span className="Navbar-hamburger">
          <div className="hamburger-bar1" />
          <div className="hamburger-bar2" />
          <div className="hamburger-bar3" />
        </span>
        <a href="localhost:3000" className="Navbar-link">
          <h1 className="Navbar-logo">Every Ting Sweet</h1>
        </a>
      </nav>
    );
  }
}
