import React, { Component } from "react";
import { SearchContainer, LoginContainer, SignUpContainer, PurchasesContainer } from "../containers";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <header className="app-header">
        <Router>
          <Switch>
            <Route exact path="/" component={SearchContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/signup" component={SignUpContainer} />
            <Route exact path="/purchases" component={PurchasesContainer} />
          </Switch>
        </Router>
      </header>
    );
  }
}

export default App;