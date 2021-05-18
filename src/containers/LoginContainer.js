import React, { Component } from "react";
import { LoginView } from "../views";
import { auth } from "../firebase/firebase";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  checkUser = () => {
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((auth) => {
        if (auth) {
          sessionStorage.setItem('email', this.state.email);
          window.open("/", "_self");
        }
      })
      .catch((error) => alert(error.message));
  };

  handleInputChange = (e) => {
    //e.preventdefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    this.checkUser();
  };

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
