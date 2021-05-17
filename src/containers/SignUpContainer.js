import React, { Component } from "react";
import { SignUpView } from "../views";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      card_number: "",
    };
  }

  handleInputChange = (e) => {
    //e.preventdefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSignUp = (e) => {

  }

  render() {
    return (
      <>
        <SignUpView
          handleInputChange={this.handleInputChange}
          handleSignUp={this.handleSignUp}
          state={this.state}
        />
      </>
    );
  }
}

export default SignUpContainer;
