import InputDisplay from "./InputDisplay";
import UserForm from "./UserForm";
import React, { Component } from "react";
import { Navbar } from "react-materialize";
import "../App.css";

export default class Home extends Component {
  state = {};
  handleUserChange = event => {
    this.setState({ input1: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ input2: event.target.value });
  };

  render() {
    return (
      <div>
        <Navbar brand="React" right />
        <UserForm
          handleUserChange={this.handleUserChange}
          handlePasswordChange={this.handlePasswordChange}
        />
        <InputDisplay input1={this.state.input1} input2={this.state.input2} />
      </div>
    );
  }
}
