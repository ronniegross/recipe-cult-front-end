import React, { Component } from "react";

export default class InputDisplay extends Component {
  render() {
    return (
      <div>
        {this.props.input1 ? <h1>Input 1 value: {this.props.input1}</h1> : null}
        {this.props.input2 ? <h1>Input 2 value: {this.props.input2}</h1> : null}
      </div>
    );
  }
}
