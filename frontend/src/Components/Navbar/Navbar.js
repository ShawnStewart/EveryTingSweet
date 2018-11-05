import React, { Component } from "react";

import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItem: "",
      showMobileMenu: false
    };
  }

  toggleMobileMenu = () => {
    const navbar = document.querySelector(".Navbar");
    const appbody = document.querySelector(".App-body");
    const mobilemenu = document.querySelector(".Navbar-mobile-menu");
    if (!this.state.showMobileMenu) {
      navbar.style.marginLeft = "250px";
      appbody.style.marginLeft = "250px";
      mobilemenu.style.width = "250px";
    } else {
      navbar.style.marginLeft = "0";
      appbody.style.marginLeft = "0";
      mobilemenu.style.width = "0";
    }
    this.setState({ showMobileMenu: !this.state.showMobileMenu });
  };

  render() {
    return (
      <div>
        <div className="Navbar-mobile-menu">Hey</div>
        <nav className="Navbar ets-container">
          <span
            className={
              "Navbar-hamburger " +
              (this.state.showMobileMenu ? "Navbar-hamburger-open" : "")
            }
            onClick={this.toggleMobileMenu}
          >
            <div className="hamburger-bar1" />
            <div className="hamburger-bar2" />
            <div className="hamburger-bar3" />
          </span>
          <a href="localhost:3000" className="Navbar-link">
            <h1 className="Navbar-logo">Every Ting Sweet</h1>
          </a>
        </nav>
      </div>
    );
  }
}
