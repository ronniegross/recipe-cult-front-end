import React, { Component } from "react";
import { Row, Input, Button } from "react-materialize";

export default class InputForm extends Component {
  render() {
    return (
      <div>
        <Row>
          <Input
            type="email"
            label="Form Input 1"
            s={8}
            onChange={this.props.handleInput1Change}
          />
        </Row>
        <Row>
          <Input
            type="password"
            label="Form Input 2 - hidden"
            s={8}
            onChange={this.props.handleInput2Change}
          />
        </Row>
        <Row>
          <Button waves="light" onClick={this.props.handleFormSubmit}>
            Submit Input
          </Button>
        </Row>
      </div>
    );
  }
}
