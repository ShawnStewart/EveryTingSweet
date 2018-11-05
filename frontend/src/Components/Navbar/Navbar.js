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

  handleMenuClick = item => {
    this.setState({ activeMenuItem: item });
    this.toggleMobileMenu();
  };

  render() {
    return (
      <div>
        <div className="Navbar-mobile-menu">
          <ul>
            <li
              className={
                this.state.activeMenuItem === "About"
                  ? "Navbar-mobile-menu-active"
                  : ""
              }
            >
              <a
                href="localhost:3000"
                className="Navbar-mobile-menu-link"
                onClick={() => {
                  this.handleMenuClick("About");
                }}
              >
                About
              </a>
            </li>
            <li
              className={
                this.state.activeMenuItem === "Menu"
                  ? "Navbar-mobile-menu-active"
                  : ""
              }
            >
              <a
                href="localhost:3000"
                className="Navbar-mobile-menu-link"
                onClick={() => {
                  this.handleMenuClick("Menu");
                }}
              >
                Menu
              </a>
            </li>
            <li
              className={
                this.state.activeMenuItem === "Catering"
                  ? "Navbar-mobile-menu-active"
                  : ""
              }
            >
              <a
                href="localhost:3000"
                className="Navbar-mobile-menu-link"
                onClick={() => {
                  this.handleMenuClick("Catering");
                }}
              >
                Catering
              </a>
            </li>
            <li
              className={
                this.state.activeMenuItem === "Contact"
                  ? "Navbar-mobile-menu-active"
                  : ""
              }
            >
              <a
                href="localhost:3000"
                className="Navbar-mobile-menu-link"
                onClick={() => {
                  this.handleMenuClick("Contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
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
          <a
            href="localhost:3000"
            className="Navbar-link"
            onClick={() => {
              this.setState({ activeMenuItem: "" });
              if (this.state.showMobileMenu) this.toggleMobileMenu();
            }}
          >
            <h1 className="Navbar-logo">Every Ting Sweet</h1>
          </a>
        </nav>
      </div>
    );
  }
}
