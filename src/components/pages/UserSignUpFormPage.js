import React, { Component } from 'react'
// import InputForm from "../InputForm";
import UserSignUpForm from "../UserSignUpForm";
import * as requestUtil from "../../Util/requestUtil";
import styled from "styled-components";

export default class UserSignUpFormPage extends Component {
  state = {
    // username: "",
    // password: "",
    // email: ""
  };

  handleUsernameChange = event => {
      this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
      this.setState({ password: event.target.value });
  };

  handleEmailChange = event => {
      this.setState({ email: event.target.value });
  };

  handleFormSubmit = async () => {
      const response = await requestUtil.sendData(
          this.state.username,
          this.state.password,
          this.state.email
      );
      console.log(response);
  };
  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <UserSignUpForm
          username={this.state.username}
          password={this.state.password}
          email={this.state.email}
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
          handleEmailChange={this.handleEmailChange}
          handleFormSubmit={this.handleFormSubmit}
        />
      </div>
    )
  }
}
