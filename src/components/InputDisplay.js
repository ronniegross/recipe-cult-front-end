import React, { Component } from "react";

export default function InputDisplay(props) {
  return (
    <div className="formInput">
      {props.input1 ? <h6>Input 1 value: {props.input1}</h6> : null}
      {props.input2 ? <h6>Input 2 value: {props.input2}</h6> : null}
      {props.input3 ? <h6>Input 3 value: {props.input3}</h6> : null}
    </div>
  );
}
