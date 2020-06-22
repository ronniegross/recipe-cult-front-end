import React, { Component } from 'react'
// import InputForm from "../InputForm";
import UserSignUpForm from "../UserSignUpForm";
import styled from "styled-components";

const UserSignUpContainer = styled.div`
  padding-left: 50px;
`

export default class UserSignUpFormPage extends Component {

  render() {
    return (
      <UserSignUpContainer>
        <h1>Sign up</h1>
        <UserSignUpForm
        />
      </UserSignUpContainer>
    )
  }
}
