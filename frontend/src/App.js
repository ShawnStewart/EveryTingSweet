import React, { Component } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-body">
          <Landing />
        </div>
      </div>
    );
  }
}

export default App;
