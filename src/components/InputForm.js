import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"

export default class InputForm extends Component {
  render() {
    return (
      <div>
        <div className="formInput">
        <TextField
          id="standard-name"
          label="Form Input 1"
          value={this.props.input1}
          onChange={this.props.handleInput1Change}
          margin="normal"
        />
        </div>
        <div className="formInput">
        <TextField
          id="standard-name"
          label="Form Input 2"
          value={this.props.input2}
          onChange={this.props.handleInput2Change}
          margin="normal"
        />
        </div> 
        <div className="formInput">
        <TextField
          id="standard-name"
          label="Form Input 3"
          value={this.props.input3}
          onChange={this.props.handleInput3Change}
          margin="normal"
        />
        </div> 
        <div className="formInput button">
        <Button 
          variant="contained" 
          color="primary"
          onClick={this.props.handleFormSubmit}>
          Submit Form
        </Button> 
        </div>
      </div>
    );
  }
}
