import React, { Component } from "react";
import { LoginView } from "../views";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleInputChange = (e) => {
    //e.preventdefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {

  }

  render() {
    return (
      <>
        <LoginView
          handleInputChange={this.handleInputChange}
          handleLogin={this.handleLogin}
          state={this.state}
        />
      </>
    );
  }
}

export default LoginContainer;
