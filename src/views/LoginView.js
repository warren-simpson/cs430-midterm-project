import React from "react";
import "./styles/LoginView.css";



const LoginView = (props) => {
  return (
    <>
      <div class="background2">
        <div class="container1">
          <div class="cell1">
            <label>Email</label>
            <input class="l1" value={props.state.email} name="email" onChange={(e) => props.handleInputChange(e)}></input>
          </div>

          <div class="cell1">
            <label>Password</label>
            <input class="l1" type="password" value={props.state.password} name="password" onChange={(e) => props.handleInputChange(e)}></input>
          </div>

          <button class="loginButton" onClick={(e) => props.handleLogin(e)}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginView;
