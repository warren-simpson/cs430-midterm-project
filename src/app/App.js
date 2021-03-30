import React, { Component } from "react";
import { SearchContainer } from "../containers";
import './App.css';

class App extends Component {
  render() {
    return (
      <header className="app-header">
        <SearchContainer/>
      </header>
    );
  }
}

export default App;