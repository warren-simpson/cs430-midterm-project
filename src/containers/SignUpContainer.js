import React, { Component } from "react";
import { SignUpView } from "../views";
//import { setUser } from "../containers/user";

import { db, auth } from "../firebase/firebase";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      card_number: "",
      exp_date: "",
      cvc: "",
    };
  }

  setUser = () => {
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      card_number: this.state.card_number,
      exp_date: this.state.exp_date,
      cvc: this.state.cvc,
    };
    db.collection("users")
      .doc(data.email.toString())
      .set(data)
      .then(() => {
        console.log("A new user has been added", "Success");
      })
      .catch((error) => {
        console.log(error.message, "Create user failed");
        //this.setState({ isSubmitting: false });
      });

    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          console.log("rounding11");
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

  handleSignUp = (e) => {
    this.setUser();
  };

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
