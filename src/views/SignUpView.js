import React from "react";
import "./styles/SignUpView.css";

const SignUpView = (props) => {
  return (
    <>
      <div class="background2">
        <div class="container2">
          <div class="cell1">
            <label>Firstname</label>
            <input
              class="l1"
              value={props.state.firstname}
              name="firstname"
              onChange={(e) => props.handleInputChange(e)}
            ></input>
          </div>

          <div class="cell1">
            <label>Lastname</label>
            <input
              class="l1"
              value={props.state.lastname}
              name="lastname"
              onChange={(e) => props.handleInputChange(e)}
            ></input>
          </div>

          <div class="cell1">
            <label>Email</label>
            <input
              class="l1"
              value={props.state.email}
              name="email"
              onChange={(e) => props.handleInputChange(e)}
            ></input>
          </div>

          <div class="cell1">
            <label>Password</label>
            <input
              class="l1"
              value={props.state.password}
              name="password"
              onChange={(e) => props.handleInputChange(e)}
            ></input>
          </div>

          <div class="cell1">
            <label>Card Number</label>
            <input
              class="l1"
              value={props.state.card_number}
              name="card_number"
              onChange={(e) => props.handleInputChange(e)}
            ></input>
          </div>

          <div class="cell1">
            <label>Exp Date</label>
            <input
              class="l1"
              value={props.state.exp_date}
              name="exp_date"
              onChange={(e) => props.handleInputChange(e)}
            ></input>
          </div>

          <div class="cell1">
            <label>CVC</label>
            <input
              class="l1"
              value={props.state.cvc}
              name="cvc"
              onChange={(e) => props.handleInputChange(e)}
            ></input>
          </div>

          <button class="signupButton" onClick={(e) => props.handleSignUp(e)}>
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpView;
