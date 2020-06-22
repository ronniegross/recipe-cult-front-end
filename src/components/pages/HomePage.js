import React, { Component } from 'react'
import styled from "styled-components";
import * as userAPI from "../../util/api/user";

const HomeContainer = styled.div`
  width: 335px;
  margin: 0 auto;
`

export default class HomePage extends Component {
  state = {
    users: []
  }

  async componentDidMount() {
    const userResponse = await userAPI.getAllUsers();
    this.setState({ users: userResponse });
  }

  listUsers = () => {
    let userCards = this.state.users.map((user, index) => {
      return (
      <h2>{user}</h2>
      )
    });
    return userCards;
  }

  render() {
    let UserCards = this.listUsers()
    return (
      <div>
        <HomeContainer>
          <h1>RecipeCult.com</h1>
          {UserCards}
        </HomeContainer>
      </div>
    )
  }
}
