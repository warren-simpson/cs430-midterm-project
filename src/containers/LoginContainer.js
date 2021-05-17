import React, { Component } from "react";
import { LoginView } from "../views";
import { setUser } from "../containers/user"

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleInputChange = (e) => {
    //e.preventdefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    
    //setUser()
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
