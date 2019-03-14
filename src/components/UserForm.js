import React, { Component } from "react";
import { Row, Input } from "react-materialize";

export default class UserForm extends Component {
  render() {
    return (
      <div>
        <Row>
          <Input
            type="email"
            label="Form Input 1"
            s={8}
            onChange={this.props.handleUserChange}
          />
          <Input
            type="password"
            label="Form Input 2 - Password"
            s={8}
            onChange={this.props.handlePasswordChange}
          />
        </Row>
      </div>
    );
  }
}
