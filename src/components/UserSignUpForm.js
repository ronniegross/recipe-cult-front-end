import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"
import * as userUtil from "../util/api/user";


export default class UserSignUpForm extends Component {
  state = {
    username: "",
    password: "",
    email: ""
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
    const response = await userUtil.createUser(
      this.state.username,
      this.state.password,
      this.state.email
    );
    console.log(response);
  };

  render() {
    return (
      <div>
        <TextField
          id="standard-name"
          label="Username"
          value={this.state.username}
          onChange={this.handleUsernameChange}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          margin="normal"
        />
        <Button 
          variant="contained" 
          color="primary"
          onClick={this.handleFormSubmit}>
            Submit Form
        </Button> 
      </div>
    )
  }
}
