import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"

export default class UserSignUpForm extends Component {
  render() {
    return (
      <div>
        <TextField
          id="standard-name"
          label="Username"
          value={this.props.username}
          onChange={this.props.handleUsernameChange}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Password"
          value={this.props.password}
          onChange={this.props.handlePasswordChange}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Email"
          value={this.props.email}
          onChange={this.props.handleEmailChange}
          margin="normal"
        />
        <Button 
          variant="contained" 
          color="primary"
          onClick={this.props.handleFormSubmit}>
            Submit Form
        </Button> 
      </div>
    )
  }
}
