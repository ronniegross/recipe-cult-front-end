import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"

export default function InputForm(props) {
    return (
      <div>
        <TextField
          id="standard-name"
          label="Form Input 1"
          value={props.input1}
          onChange={props.handleInput1Change}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Form Input 2"
          value={props.input2}
          onChange={props.handleInput2Change}
          margin="normal"
        /> 
        <TextField
          id="standard-name"
          label="Form Input 3"
          value={props.input3}
          onChange={props.handleInput3Change}
          margin="normal"
        /> 
        <Button 
          variant="contained" 
          color="primary"
          onClick={props.handleFormSubmit}>
          Submit Form
        </Button> 
      </div>
    );
}
